/**
 * Accelerate DevEx Book Club - Interactive Components
 * Modular JavaScript for feedback systems and interactive elements
 */

// Utility Functions
const Utils = {
  // Get element safely with error handling
  getElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`Element not found: ${selector}`);
    }
    return element;
  },

  // Get all elements safely with error handling
  getElements(selector) {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) {
      console.warn(`No elements found: ${selector}`);
    }
    return elements;
  }
};

// Feedback System Module
const FeedbackSystem = {
  // Initialize feedback system for radio button interactions
  init(config) {
    if (!config || !config.feedbackGroups) {
      console.warn('FeedbackSystem: No configuration provided');
      return;
    }

    config.feedbackGroups.forEach(group => {
      this.setupFeedbackGroup(group);
    });
  },

  // Setup individual feedback group
  setupFeedbackGroup(group) {
    const { radioName, feedbackId, dataSource } = group;
    
    if (!radioName || !feedbackId || !dataSource) {
      console.warn('FeedbackSystem: Invalid group configuration', group);
      return;
    }

    const radios = Utils.getElements(`input[name="${radioName}"]`);
    const feedbackElement = Utils.getElement(`#${feedbackId}`);

    if (!feedbackElement) {
      console.warn(`FeedbackSystem: Feedback element not found: #${feedbackId}`);
      return;
    }

    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        this.updateFeedback(radio.value, feedbackElement, dataSource);
      });
    });
  },

  // Update feedback content
  updateFeedback(value, feedbackElement, dataSource) {
    const info = dataSource[value];
    if (!info) {
      console.warn(`FeedbackSystem: No data found for value: ${value}`);
      return;
    }

    feedbackElement.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
    feedbackElement.classList.add('active');
  }
};

// Slider Component Module
const SliderComponent = {
  init(config) {
    if (!config) {
      console.warn('SliderComponent: No configuration provided');
      return;
    }

    const { sliderId, thumbId, feedbackId, feedbackMessages } = config;
    
    const slider = Utils.getElement(`#${sliderId}`);
    const thumb = Utils.getElement(`#${thumbId}`);
    const feedback = Utils.getElement(`#${feedbackId}`);

    if (!slider || !thumb || !feedback) {
      console.warn('SliderComponent: Required elements not found');
      return;
    }

    this.setupSlider(slider, thumb, feedback, feedbackMessages);
  },

  setupSlider(slider, thumb, feedback, feedbackMessages) {
    let isDragging = false;

    const updateSlider = (clientX) => {
      const rect = slider.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = x / rect.width;
      
      thumb.style.left = x + 'px';
      
      let messageKey;
      if (percentage < 0.33) {
        messageKey = 'restricted';
      } else if (percentage < 0.67) {
        messageKey = 'flexible';
      } else {
        messageKey = 'freedom';
      }
      
      const message = feedbackMessages[messageKey];
      if (message) {
        feedback.innerHTML = `<h5>${message.title}</h5><p>${message.content}</p>`;
      }
    };

    const startDrag = (clientX) => {
      isDragging = true;
      updateSlider(clientX);
    };

    const stopDrag = () => {
      isDragging = false;
    };

    // Mouse events
    thumb.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startDrag(e.clientX);
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        updateSlider(e.clientX);
      }
    });

    document.addEventListener('mouseup', stopDrag);

    // Touch events
    thumb.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (e.touches[0]) {
        startDrag(e.touches[0].clientX);
      }
    });

    document.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches[0]) {
        updateSlider(e.touches[0].clientX);
      }
    });

    document.addEventListener('touchend', stopDrag);

    // Initialize with default position (middle)
    const rect = slider.getBoundingClientRect();
    updateSlider(rect.left + (rect.width * 0.5));
  }
};

// Action Items Formatter Module
const ActionItemsFormatter = {
  init() {
    const headings = Utils.getElements('h2');
    headings.forEach(heading => {
      if (heading.textContent.includes('Action Items')) {
        let nextElement = heading.nextElementSibling;
        while (nextElement) {
          if (nextElement.tagName === 'UL' || nextElement.tagName === 'OL') {
            nextElement.classList.add('action-items');
            break;
          }
          if (nextElement.tagName === 'H1' || nextElement.tagName === 'H2' || nextElement.tagName === 'H3') {
            break;
          }
          nextElement = nextElement.nextElementSibling;
        }
      }
    });
  }
};

// Discussion Questions Formatter Module (from meeting.html)
const DiscussionQuestionsFormatter = {
  init() {
    const headings = Utils.getElements('h2');
    headings.forEach(heading => {
      if (heading.textContent.includes('Discussion Questions')) {
        const nextOl = heading.nextElementSibling;
        if (nextOl && nextOl.tagName === 'OL') {
          nextOl.classList.add('discussion-questions-list');
        }
      }
    });
  }
};

// Data Manager - Centralized data storage
const DataManager = {
  // DORA Performance Data
  doraInfo: {
    high: {
      title: "High-Performing Team",
      content: "Your team demonstrates elite software delivery performance! High-performing organizations deploy multiple times per day, have lead times under one hour, restore service in under an hour, and have change failure rates under 15%. Focus on maintaining these practices and sharing knowledge with other teams."
    },
    medium: {
      title: "Medium-Performing Team", 
      content: "Your team shows solid DevOps practices with room for improvement. Medium performers typically deploy weekly to monthly, have lead times of days to weeks, and change failure rates of 16-45%. Focus on reducing batch sizes, improving test automation, and increasing deployment frequency."
    },
    low: {
      title: "Low-Performing Team",
      content: "Your team has significant opportunities for improvement. Low performers deploy monthly to every six months, have lead times of months, take days to weeks to restore service, and have change failure rates of 46-60%. Start with version control, deployment automation, and continuous integration basics."
    }
  },

  // Deployment Confidence Data
  confidenceInfo: {
    anxious: {
      title: "Deployment Anxiety Signals Process Problems",
      content: "According to Accelerate research, deployment pain is not inevitable—it's a signal of poor practices. Anxiety indicates manual processes, large batch sizes, and insufficient testing. Start with small improvements: add one test, create a deployment checklist, or implement basic monitoring."
    },
    neutral: {
      title: "Manageable Deployments with Improvement Potential",
      content: "Your team manages deployments but still experiences tension. This suggests some good practices are in place but opportunities remain. Focus on increasing deployment frequency, reducing batch sizes, and building more comprehensive automated testing to move toward confident deployments."
    },
    confident: {
      title: "Confident Deployment Culture",
      content: "Excellent! Confident, routine deployments indicate strong DevOps practices. Your team likely has good test automation, deployment automation, and monitoring. Continue refining these practices and help other teams achieve similar confidence through knowledge sharing."
    }
  },

  // Priority/Improvement Focus Data
  priorityInfo: {
    "lead-time": {
      title: "Improve Lead Time",
      content: "Lead time measures the time from code commit to production. To improve: reduce batch sizes, implement trunk-based development, automate testing and deployment pipelines, and eliminate manual approval processes. Small, frequent changes reduce lead time significantly."
    },
    "deploy-frequency": {
      title: "Increase Deployment Frequency",
      content: "Deployment frequency indicates your ability to deliver value quickly. To improve: work in smaller batches, implement feature flags, improve automated testing, and reduce dependencies between teams. Start by deploying weekly, then progress to daily deployments."
    },
    "restore-time": {
      title: "Reduce Mean Time to Restore",
      content: "Faster recovery from failures is crucial for stability. To improve: implement comprehensive monitoring and alerting, practice incident response procedures, improve rollback capabilities, and maintain good documentation. Preparation enables rapid response when issues occur."
    },
    "change-fail": {
      title: "Lower Change Failure Rate", 
      content: "High change failure rates indicate quality issues in your delivery process. To improve: implement comprehensive automated testing, use test-driven development, improve code review processes, and implement continuous integration. Quality must be built in, not inspected later."
    }
  },

  // Culture Assessment Data
  cultureInfo: {
    pathological: {
      title: "Pathological (Power-Oriented) Culture",
      content: "Characterized by large amounts of fear and threat. Information is hoarded and withheld for political reasons, or distorted to make individuals look better. These organizations show low cooperation across groups and a culture of blame. According to Westrum's research, pathological cultures correlate with poor performance and higher failure rates."
    },
    bureaucratic: {
      title: "Bureaucratic (Rule-Oriented) Culture", 
      content: "Preoccupied with rules and positions, with responsibilities compartmentalized by department. There's little concern for the overall mission of the organization. Rules are more important than the mission. Information flows through official channels, but innovation and risk-taking are discouraged."
    },
    generative: {
      title: "Generative (Performance-Oriented) Culture",
      content: "Focuses fully on the mission with high cooperation and trust. Features good information flow, collaboration between teams, and conscious inquiry. According to Accelerate research, generative cultures predict both software delivery performance and organizational performance, leading to higher market share, productivity, and profitability."
    }
  },

  // Cultural Practice Data
  practiceInfo: {
    "peer-review": {
      title: "Peer Review Over Approval Boards",
      content: "Lightweight approval processes with team ownership enable faster decisions and shared responsibility. This practice reduces bureaucratic overhead while maintaining quality, fostering trust and collaboration. Teams become more autonomous and can respond quickly to change."
    },
    "transparent-metrics": {
      title: "Transparent Metrics Sharing",
      content: "Open sharing of performance data creates accountability and drives improvement. When teams can see how their work impacts key metrics like deployment frequency and lead time, it enables data-driven decisions and continuous improvement. Transparency builds trust and alignment."
    },
    "learning-failures": {
      title: "Learning from Failures",
      content: "Treating failures as learning opportunities rather than blame events is crucial for psychological safety. When teams conduct blameless post-mortems and share lessons learned, it prevents future issues and builds organizational resilience. This practice is essential for high-performing cultures."
    },
    "rapid-feedback": {
      title: "Rapid Feedback Loops",
      content: "Short feedback cycles from customers, monitoring, and automated testing enable quick course correction. Fast feedback reduces risk, improves quality, and accelerates learning. This practice supports continuous delivery and helps teams deliver value more effectively."
    }
  },

  // Continuous Delivery Principles Data
  cdInfo: {
    "build-quality": {
      title: "Build Quality In",
      content: "Quality should be built into the process from the start, not inspected later. This requires reliable test automation at all levels (unit, API, UI), continuous testing throughout development, and automated tests running against every commit. This practice reduces rework and increases confidence in deployments."
    },
    "small-batches": {
      title: "Work in Small Batches", 
      content: "Slice work into small pieces completed in a week or less. This applies at feature and product levels to achieve short lead times and faster feedback loops. Working in small batches enables rapid customer feedback and data-driven hypothesis testing, reducing risk and improving outcomes."
    },
    "automate": {
      title: "Automate Repetitive Tasks",
      content: "Computers perform repetitive tasks; people solve problems. Automate regression testing and software deployments to reduce the cost of pushing changes. Automation frees teams to focus on solving customer problems and reduces human error in repetitive processes."
    },
    "trunk-based": {
      title: "Trunk-Based Development",
      content: "Developers merge small, frequent updates to a main branch with short-lived feature branches. This practice streamlines merging and integration, enabling continuous integration and delivery. High-performing teams keep branches short-lived and integrate regularly with automated testing."
    }
  },

  // Dependency Management Data
  dependencyInfo: {
    "shared-database": {
      title: "Shared Database Dependency",
      content: "Shared databases create tight coupling between teams and services. According to Accelerate research, this significantly impacts deployment frequency and lead time. Teams must coordinate changes, creating bottlenecks and reducing autonomy. Consider database-per-service patterns or careful schema evolution strategies."
    },
    "release-coordination": {
      title: "Release Coordination Dependency", 
      content: "When teams must coordinate releases, it indicates architectural coupling and reduces deployment frequency. The Accelerate book emphasizes that high-performing teams can deploy independently. Consider trunk-based development, feature flags, and backward-compatible API changes to eliminate coordination needs."
    },
    "independent-services": {
      title: "Independent Services",
      content: "Independent services enable loose coupling and autonomous team operation. This architectural pattern correlates with high software delivery performance in Accelerate research. Teams can test, deploy, and scale services independently, leading to faster lead times and higher deployment frequency."
    }
  },

  // Work in Progress Tracking Data
  wipInfo: {
    "task-lists": {
      title: "Task Lists for WIP Tracking",
      content: "Simple task lists provide basic visibility but lack flow optimization. While better than no tracking, they don't enforce WIP limits or highlight bottlenecks. Consider evolving to visual systems that limit work in progress and make flow problems visible."
    },
    "kanban": {
      title: "Kanban Boards",
      content: "Kanban boards excel at visualizing flow and limiting WIP. They align with lean principles from manufacturing that influenced DevOps practices. The visual nature helps identify bottlenecks and optimize flow. According to Accelerate research, teams that limit batch sizes and visualize work achieve better performance."
    },
    "sprint": {
      title: "Sprint/Scrum Boards", 
      content: "Sprint boards provide time-boxed visibility and can work well when integrated with continuous delivery practices. The key is maintaining small batch sizes within sprints. Accelerate research shows that working in small batches - regardless of framework - correlates with higher performance."
    },
    "none": {
      title: "No WIP Tracking",
      content: "Without WIP visualization, teams lose critical visibility into flow and bottlenecks. This makes it difficult to identify improvement opportunities and limits the ability to optimize delivery. Consider implementing basic Kanban visualization as a first step toward better flow management."
    }
  },

  // Change Implementation Data
  changeInfo: {
    "automated-test": {
      title: "Add One Automated Test",
      content: "Start with the smallest possible test to begin building confidence in deployments. According to Accelerate research, test automation is one of the key technical practices that drive software delivery performance. Even a single test reduces manual verification and begins establishing the safety net needed for frequent deployments."
    },
    "deployment-checklist": {
      title: "Create Deployment Checklist",
      content: "A simple checklist ensures consistent deployments and captures tribal knowledge. While manual, it's a stepping stone to automation and reduces human error. Document each step clearly so the checklist can evolve into automated processes. This practice builds reliability and confidence in deployments."
    },
    "monitor-key-metric": {
      title: "Monitor One Key Metric",
      content: "Start monitoring one critical business or system metric to enable data-driven decisions. Choose something that matters to users - response time, error rate, or a key business indicator. Monitoring provides the feedback loops essential for continuous improvement and rapid issue detection."
    },
    "status-communication": {
      title: "Share Deployment Status",
      content: "Transparent communication about deployment status builds trust and enables rapid response if issues arise. Status sharing also celebrates successful deployments and builds momentum for continuous improvement. It supports the generative culture characteristics identified in Westrum's research."
    },
    "deployment-dashboard": {
      title: "Create Deployment Dashboard",
      content: "Visual dashboards make deployment information accessible to all stakeholders and support data-driven decision making. Dashboards can track DORA metrics over time and highlight improvement trends. This visibility supports both technical and cultural aspects of DevOps transformation."
    }
  },

  // Tool Selection Slider Messages
  toolSliderMessages: {
    restricted: {
      title: "Restricted Tool Selection",
      content: "Teams must use pre-approved tools only. This can limit innovation but ensures standardization and security compliance. Common in highly regulated environments."
    },
    flexible: {
      title: "Flexible Tool Selection", 
      content: "Teams have some choice in tools within defined categories or approval processes. Balances innovation with governance. Allows experimentation with oversight."
    },
    freedom: {
      title: "Full Tool Freedom",
      content: "Teams can choose any tools that help them deliver value. Maximizes autonomy and innovation but requires strong practices around security and integration."
    }
  }
};

// Main Meeting Initializer
const MeetingComponents = {
  // Initialize all components for a specific meeting
  init(meetingConfig) {
    if (!meetingConfig) {
      console.warn('MeetingComponents: No configuration provided');
      return;
    }

    // Initialize common formatters
    ActionItemsFormatter.init();
    DiscussionQuestionsFormatter.init();

    // Initialize feedback systems if configured
    if (meetingConfig.feedbackGroups) {
      FeedbackSystem.init({ feedbackGroups: meetingConfig.feedbackGroups });
    }

    // Initialize slider if configured
    if (meetingConfig.slider) {
      SliderComponent.init(meetingConfig.slider);
    }
  }
};

// Meeting-specific configurations
const MeetingConfigs = {
  meeting1: {
    feedbackGroups: [
      {
        radioName: 'dora-performance',
        feedbackId: 'dora-feedback',
        dataSource: DataManager.doraInfo
      },
      {
        radioName: 'deployment-confidence',
        feedbackId: 'confidence-feedback',
        dataSource: DataManager.confidenceInfo
      },
      {
        radioName: 'improvement-focus',
        feedbackId: 'priority-feedback',
        dataSource: DataManager.priorityInfo
      }
    ]
  },

  meeting2: {
    feedbackGroups: [
      {
        radioName: 'culture-type',
        feedbackId: 'culture-feedback',
        dataSource: DataManager.cultureInfo
      },
      {
        radioName: 'cultural-practice',
        feedbackId: 'practice-feedback',
        dataSource: DataManager.practiceInfo
      },
      {
        radioName: 'cd-priority',
        feedbackId: 'cd-feedback',
        dataSource: DataManager.cdInfo
      }
    ],
    slider: {
      sliderId: 'tool-slider',
      thumbId: 'tool-thumb',
      feedbackId: 'slider-feedback',
      feedbackMessages: DataManager.toolSliderMessages
    }
  },

  meeting3: {
    feedbackGroups: [
      {
        radioName: 'dependency-type',
        feedbackId: 'dependency-feedback',
        dataSource: DataManager.dependencyInfo
      },
      {
        radioName: 'wip-method',
        feedbackId: 'wip-feedback',
        dataSource: DataManager.wipInfo
      }
    ]
  },

  meeting4: {
    feedbackGroups: [
      {
        radioName: 'smallest-change',
        feedbackId: 'change-feedback',
        dataSource: DataManager.changeInfo
      }
    ]
  }
};

// Auto-initialize based on page
document.addEventListener('DOMContentLoaded', function() {
  // Determine which meeting this is based on URL or page class
  const path = window.location.pathname;
  let meetingId = null;

  // More flexible URL pattern matching for Jekyll sites
  if (path.includes('meeting-1') || path.includes('meeting1')) {
    meetingId = 'meeting1';
  } else if (path.includes('meeting-2') || path.includes('meeting2')) {
    meetingId = 'meeting2';
  } else if (path.includes('meeting-3') || path.includes('meeting3')) {
    meetingId = 'meeting3';
  } else if (path.includes('meeting-4') || path.includes('meeting4')) {
    meetingId = 'meeting4';
  }

  // Also check for data attributes on body or html elements
  if (!meetingId) {
    const bodyMeeting = document.body.getAttribute('data-meeting');
    const htmlMeeting = document.documentElement.getAttribute('data-meeting');
    meetingId = bodyMeeting || htmlMeeting;
  }

  // Initialize the appropriate meeting configuration
  if (meetingId && MeetingConfigs[meetingId]) {
    console.log(`Initializing ${meetingId} components`);
    MeetingComponents.init(MeetingConfigs[meetingId]);
  } else {
    // Initialize common formatters for non-meeting pages
    console.log('Initializing common formatters');
    ActionItemsFormatter.init();
    DiscussionQuestionsFormatter.init();
  }
});

// Export for manual initialization if needed
window.AccelerateDevEx = {
  MeetingComponents,
  MeetingConfigs,
  FeedbackSystem,
  SliderComponent,
  ActionItemsFormatter,
  DiscussionQuestionsFormatter,
  DataManager,
  Utils
};