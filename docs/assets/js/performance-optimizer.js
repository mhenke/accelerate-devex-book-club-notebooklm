/**
 * Dynamic Performance Optimization Manager
 * Manages will-change property dynamically to prevent memory overconsumption
 * Replaces static CSS will-change declarations
 */

class PerformanceOptimizer {
  constructor() {
    this.activeElements = new Set();
    this.intersectionObserver = null;
    this.mutationObserver = null;

    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () =>
        this.setupOptimizations()
      );
    } else {
      this.setupOptimizations();
    }
  }

  setupOptimizations() {
    this.setupIntersectionObserver();
    this.setupHoverOptimizations();
    this.setupScrollOptimizations();
    this.setupAnimationOptimizations();
    this.cleanupLegacyWillChange();
  }

  /**
   * Remove static will-change declarations that cause memory issues
   */
  cleanupLegacyWillChange() {
    const staticWillChangeElements = document.querySelectorAll(
      '[style*="will-change"]'
    );
    staticWillChangeElements.forEach((element) => {
      const style = element.style.cssText;
      if (style.includes('will-change')) {
        // Remove will-change from inline styles
        element.style.willChange = 'auto';
      }
    });

    // Check for CSS classes with static will-change
    const problematicClasses = ['.hero-metrics .metric-icon', '.metric-card'];

    problematicClasses.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        element.style.willChange = 'auto';
      });
    });
  }

  /**
   * Setup intersection observer for viewport-based optimizations
   */
  setupIntersectionObserver() {
    if (!('IntersectionObserver' in window)) {
      return;
    }

    const options = {
      rootMargin: '50px',
      threshold: 0.1,
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target;

        if (entry.isIntersecting) {
          // Element is visible, prepare for potential animations
          this.prepareElement(element);
        } else {
          // Element is not visible, clean up optimizations
          this.cleanupElement(element);
        }
      });
    }, options);

    // Observe elements that might animate
    const animatableElements = document.querySelectorAll(
      [
        '.metric-card',
        '.hero-metrics .metric-icon',
        '.dora-metrics-visual .metric-card',
        '.culture-card',
        '.resource-card',
        '.btn',
        '.assessment-btn',
      ].join(', ')
    );

    animatableElements.forEach((element) => {
      this.intersectionObserver.observe(element);
    });
  }

  /**
   * Setup hover-based performance optimizations
   */
  setupHoverOptimizations() {
    // Only apply optimizations on non-touch devices
    if (!('ontouchstart' in window)) {
      this.setupHoverForElements([
        '.metric-card',
        '.hero-metrics .metric-icon',
        '.culture-card',
        '.resource-card',
        '.btn',
        '.assessment-btn',
      ]);
    }
  }

  setupHoverForElements(selectors) {
    selectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((element) => {
        // Optimize for hover animations
        element.addEventListener(
          'mouseenter',
          () => {
            this.enableTransformOptimization(element);
          },
          { passive: true }
        );

        element.addEventListener(
          'mouseleave',
          () => {
            // Delay cleanup to allow animation to complete
            setTimeout(() => {
              this.disableTransformOptimization(element);
            }, 300);
          },
          { passive: true }
        );
      });
    });
  }

  /**
   * Setup scroll-based optimizations
   */
  setupScrollOptimizations() {
    let scrollTimeout;
    let isScrolling = false;

    const handleScrollStart = () => {
      if (!isScrolling) {
        isScrolling = true;
        this.enableScrollOptimizations();
      }
    };

    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        this.disableScrollOptimizations();
      }, 150);
    };

    window.addEventListener(
      'scroll',
      () => {
        handleScrollStart();
        handleScrollEnd();
      },
      { passive: true }
    );
  }

  /**
   * Setup animation-based optimizations
   */
  setupAnimationOptimizations() {
    // Listen for animation events
    document.addEventListener(
      'animationstart',
      (event) => {
        this.enableTransformOptimization(event.target);
      },
      { passive: true }
    );

    document.addEventListener(
      'animationend',
      (event) => {
        this.disableTransformOptimization(event.target);
      },
      { passive: true }
    );

    document.addEventListener(
      'transitionstart',
      (event) => {
        if (
          event.propertyName === 'transform' ||
          event.propertyName === 'opacity'
        ) {
          this.enableTransformOptimization(event.target);
        }
      },
      { passive: true }
    );

    document.addEventListener(
      'transitionend',
      (event) => {
        if (
          event.propertyName === 'transform' ||
          event.propertyName === 'opacity'
        ) {
          this.disableTransformOptimization(event.target);
        }
      },
      { passive: true }
    );
  }

  /**
   * Prepare element for potential animations
   */
  prepareElement(element) {
    // Add to active elements set
    this.activeElements.add(element);

    // Enable hardware acceleration without will-change
    element.style.transform = element.style.transform || 'translate3d(0,0,0)';
  }

  /**
   * Clean up element optimizations
   */
  cleanupElement(element) {
    this.activeElements.delete(element);
    this.disableTransformOptimization(element);

    // Remove hardware acceleration if no transform is applied
    if (element.style.transform === 'translate3d(0,0,0)') {
      element.style.transform = '';
    }
  }

  /**
   * Enable transform optimization for specific element
   */
  enableTransformOptimization(element) {
    // Use will-change only during active animation/interaction
    element.style.willChange = 'transform, opacity';
    this.activeElements.add(element);
  }

  /**
   * Disable transform optimization for specific element
   */
  disableTransformOptimization(element) {
    // Remove will-change to free memory
    element.style.willChange = 'auto';
    this.activeElements.delete(element);
  }

  /**
   * Enable optimizations during scroll
   */
  enableScrollOptimizations() {
    // Optimize fixed/sticky elements during scroll
    const fixedElements = document.querySelectorAll(
      ['.site-header', '.skip-link:focus'].join(', ')
    );

    fixedElements.forEach((element) => {
      element.style.willChange = 'transform';
    });
  }

  /**
   * Disable scroll optimizations
   */
  disableScrollOptimizations() {
    const fixedElements = document.querySelectorAll(
      ['.site-header', '.skip-link:focus'].join(', ')
    );

    fixedElements.forEach((element) => {
      element.style.willChange = 'auto';
    });
  }

  /**
   * Memory cleanup and performance monitoring
   */
  cleanup() {
    // Clean up all active optimizations
    this.activeElements.forEach((element) => {
      element.style.willChange = 'auto';
    });
    this.activeElements.clear();

    // Disconnect observers
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }

  /**
   * Performance monitoring and debugging
   */
  getMemoryUsage() {
    if ('memory' in performance) {
      return {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit,
        activeElements: this.activeElements.size,
      };
    }
    return { activeElements: this.activeElements.size };
  }

  /**
   * Debug method to check current optimizations
   */
  debug() {
    const info = {
      activeElements: this.activeElements.size,
      memory: this.getMemoryUsage(),
      willChangeElements: document.querySelectorAll(
        '[style*="will-change: transform"], [style*="will-change: opacity"]'
      ).length,
    };

    // eslint-disable-next-line no-console
    console.log('Performance Optimizer Status:', info);
    return info;
  }
}

// Touch target enhancement for accessibility
class TouchTargetOptimizer {
  constructor() {
    this.minTouchTarget = 44; // 44px WCAG minimum
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () =>
        this.optimizeTouchTargets()
      );
    } else {
      this.optimizeTouchTargets();
    }
  }

  optimizeTouchTargets() {
    // Find interactive elements smaller than 44px
    const interactiveSelectors = [
      'button',
      'a',
      '[role="button"]',
      'input[type="button"]',
      'input[type="submit"]',
      '.btn',
      '.metric-icon',
      '.assessment-btn',
    ];

    interactiveSelectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((element) => {
        this.ensureMinimumTouchTarget(element);
      });
    });
  }

  ensureMinimumTouchTarget(element) {
    const rect = element.getBoundingClientRect();
    const style = window.getComputedStyle(element);

    // Check if element is too small
    if (rect.width < this.minTouchTarget || rect.height < this.minTouchTarget) {
      // Add touch target optimization
      element.style.minWidth = `${this.minTouchTarget}px`;
      element.style.minHeight = `${this.minTouchTarget}px`;

      // Ensure centered content if needed
      if (style.display !== 'flex') {
        element.style.display = 'inline-flex';
        element.style.alignItems = 'center';
        element.style.justifyContent = 'center';
      }

      // Add accessible label if missing
      if (!element.getAttribute('aria-label') && !element.textContent.trim()) {
        element.setAttribute(
          'aria-label',
          this.generateAccessibleLabel(element)
        );
      }
    }
  }

  generateAccessibleLabel(element) {
    // Try to generate meaningful label from context
    const className = element.className;
    const tagName = element.tagName.toLowerCase();

    if (className.includes('metric-icon')) {
      return 'Metric indicator';
    }
    if (className.includes('btn')) {
      return 'Button';
    }
    if (tagName === 'button') {
      return 'Button';
    }
    if (tagName === 'a') {
      return 'Link';
    }

    return 'Interactive element';
  }
}

// FOUC (Flash of Unstyled Content) prevention
class FOUCPreventer {
  constructor() {
    this.init();
  }

  init() {
    // Add class to indicate CSS is loaded
    document.documentElement.classList.add('css-loading');

    // Remove loading class when CSS is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () =>
        this.handleCSSReady()
      );
    } else {
      this.handleCSSReady();
    }
  }

  handleCSSReady() {
    // Wait for stylesheets to load
    const styleSheets = document.styleSheets;
    let loadedCount = 0;
    const totalSheets = styleSheets.length;

    if (totalSheets === 0) {
      this.markCSSReady();
      return;
    }

    // Check if stylesheets are loaded
    for (let i = 0; i < totalSheets; i++) {
      try {
        // Accessing cssRules will throw if stylesheet isn't loaded
        if (styleSheets[i].cssRules) {
          loadedCount++;
        }
      } catch (e) {
        // Stylesheet not loaded yet, set up listener
        const link = document.querySelector(
          `link[href="${styleSheets[i].href}"]`
        );
        if (link) {
          link.addEventListener('load', () => {
            loadedCount++;
            if (loadedCount >= totalSheets) {
              this.markCSSReady();
            }
          });
        }
      }
    }

    if (loadedCount >= totalSheets) {
      this.markCSSReady();
    }
  }

  markCSSReady() {
    // Remove loading state
    document.documentElement.classList.remove('css-loading');
    document.documentElement.classList.add('css-ready');

    // Dispatch custom event for other scripts
    document.dispatchEvent(new CustomEvent('css-ready'));
  }
}

// Initialize performance optimizations
let performanceOptimizer = null;
let touchTargetOptimizer = null; // eslint-disable-line no-unused-vars
let foucPreventer = null; // eslint-disable-line no-unused-vars

// Initialize when DOM is ready
function initializePerformanceOptimizations() {
  performanceOptimizer = new PerformanceOptimizer();
  touchTargetOptimizer = new TouchTargetOptimizer();
  foucPreventer = new FOUCPreventer();
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener(
    'DOMContentLoaded',
    initializePerformanceOptimizations
  );
} else {
  initializePerformanceOptimizations();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (performanceOptimizer) {
    performanceOptimizer.cleanup();
  }
});

// Export for external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PerformanceOptimizer,
    TouchTargetOptimizer,
    FOUCPreventer,
  };
}

// Global access for debugging
window.performanceOptimizer = performanceOptimizer;
