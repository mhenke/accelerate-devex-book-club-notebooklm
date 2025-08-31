/* Central JavaScript for Accelerate DevEx Book Club Website */

document.addEventListener('DOMContentLoaded', function() {
  
  /* ========================================
   * MEETING 1: DORA METRICS & CULTURE TYPES
   * ========================================*/
  
  // Feedback content from Accelerate research
  const doraInfo = {
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
  };

  const confidenceInfo = {
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
  };

  const priorityInfo = {
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
  };
  
  // Add event listeners for DORA performance assessment
  const doraRadios = document.querySelectorAll('input[name="dora-performance"]');
  if (doraRadios.length > 0) {
    doraRadios.forEach(radio => {
      radio.addEventListener('change', function() {
        const feedback = document.getElementById('dora-feedback');
        if (feedback) {
          const info = doraInfo[this.value];
          feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
          feedback.classList.add('active');
        }
      });
    });
  }

  // Add event listeners for deployment confidence
  const confidenceRadios = document.querySelectorAll('input[name="deployment-confidence"]');
  if (confidenceRadios.length > 0) {
    confidenceRadios.forEach(radio => {
      radio.addEventListener('change', function() {
        const feedback = document.getElementById('confidence-feedback');
        if (feedback) {
          const info = confidenceInfo[this.value];
          feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
          feedback.classList.add('active');
        }
      });
    });
  }

  // Add event listeners for improvement focus
  const priorityRadios = document.querySelectorAll('input[name="improvement-focus"]');
  if (priorityRadios.length > 0) {
    priorityRadios.forEach(radio => {
      radio.addEventListener('change', function() {
        const feedback = document.getElementById('priority-feedback');
        if (feedback) {
          const info = priorityInfo[this.value];
          feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
          feedback.classList.add('active');
        }
      });
    });
  }
  
  /* ========================================
   * MEETING 2: CULTURE & CONTINUOUS DELIVERY
   * ========================================*/
  
  // Feedback content from Accelerate book
  const cultureInfo = {
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
  };

  const practiceInfo = {
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
  };

  const cdInfo = {
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
  };

  // Add event listeners for culture assessment
  const cultureRadios = document.querySelectorAll('input[name="culture-type"]');
  if (cultureRadios.length > 0) {
    cultureRadios.forEach(radio => {
      radio.addEventListener('change', function() {
        const feedback = document.getElementById('culture-feedback');
        if (feedback) {
          const info = cultureInfo[this.value];
          feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
          feedback.classList.add('active');
        }
      });
    });
  }

  // Add event listeners for practice selection  
  const practiceRadios = document.querySelectorAll('input[name="cultural-practice"]');
  if (practiceRadios.length > 0) {
    practiceRadios.forEach(radio => {
      radio.addEventListener('change', function() {
        const feedback = document.getElementById('practice-feedback');
        if (feedback) {
          const info = practiceInfo[this.value];
          feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
          feedback.classList.add('active');
        }
      });
    });
  }

  // Add event listeners for CD principles
  const cdRadios = document.querySelectorAll('input[name="cd-priority"]');
  if (cdRadios.length > 0) {
    cdRadios.forEach(radio => {
      radio.addEventListener('change', function() {
        const feedback = document.getElementById('cd-feedback');
        if (feedback) {
          const info = cdInfo[this.value];
          feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
          feedback.classList.add('active');
        }
      });
    });
  }

  // Format action items
  const headings = document.querySelectorAll('h2');
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

  // Tool Freedom Slider functionality
  const slider = document.getElementById('tool-slider');
  const thumb = document.getElementById('tool-thumb');
  const sliderFeedback = document.getElementById('slider-feedback');
  
  if (slider && thumb && sliderFeedback) {
    let isDragging = false;
    
    const feedbackMessages = {
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
    };
    
    function updateSlider(clientX) {
      const rect = slider.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      thumb.style.left = percentage + '%';
      
      let level, color;
      if (percentage < 33) {
        level = 'restricted';
        color = '#f44336';
      } else if (percentage < 67) {
        level = 'flexible';
        color = '#ffc107';
      } else {
        level = 'freedom';
        color = '#4caf50';
      }
      
      thumb.style.borderColor = color;
      sliderFeedback.style.borderLeftColor = color;
      sliderFeedback.innerHTML = `<h5 style="margin: 0 0 0.5rem 0; color: ${color}; font-size: 1rem;">${feedbackMessages[level].title}</h5><p style="margin: 0; font-size: 0.85rem; line-height: 1.4;">${feedbackMessages[level].content}</p>`;
    }
    
    function startDrag(clientX) {
      isDragging = true;
      updateSlider(clientX);
      document.body.style.userSelect = 'none';
    }
    
    function stopDrag() {
      isDragging = false;
      document.body.style.userSelect = '';
    }
    
    // Mouse events
    thumb.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startDrag(e.clientX);
    });
    
    slider.addEventListener('click', (e) => {
      if (!isDragging) {
        updateSlider(e.clientX);
      }
    });
    
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        e.preventDefault();
        updateSlider(e.clientX);
      }
    });
    
    document.addEventListener('mouseup', stopDrag);
    
    // Touch events for mobile
    thumb.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startDrag(e.touches[0].clientX);
    });
    
    document.addEventListener('touchmove', (e) => {
      if (isDragging) {
        e.preventDefault();
        updateSlider(e.touches[0].clientX);
      }
    });
    
    document.addEventListener('touchend', stopDrag);
  }
  
  /* ========================================
   * MEETING 4: LEADERSHIP & TRANSFORMATION
   * ========================================*/
   
  // Feedback content from Accelerate research and DevOps best practices
  const changeInfo = {
    "automated-test": {
      title: "Add One Automated Test",
      content: "Start with the smallest possible test to begin building confidence in deployments. According to Accelerate research, test automation is one of the key technical practices that drive software delivery performance. Even a single test reduces manual verification and begins establishing the safety net needed for frequent deployments."
    },
    "deployment-checklist": {
      title: "Create Deployment Checklist", 
      content: "A simple checklist ensures consistency and reduces errors during deployments. This process improvement helps establish standard work, a key lean principle. It also reduces cognitive load on team members and makes deployments more predictable, supporting higher deployment frequency over time."
    },
    "monitoring-alert": {
      title: "Set Up Monitoring Alert",
      content: "Monitoring and observability are essential for reducing Mean Time to Restore (MTTR), one of the four DORA metrics. A single alert for a critical system component provides early warning of issues and enables faster response. This supports both stability and the confidence needed for more frequent deployments."
    },
    "peer-review": {
      title: "Peer Review Before Deploy",
      content: "Peer review increases deployment confidence through shared knowledge and catches potential issues before production. This practice balances speed with safety, supporting both high deployment frequency and low change failure rate. It also builds team capability and reduces bus factor risks."
    },
    "rollback-steps": {
      title: "Document Rollback Steps",
      content: "Clear rollback procedures reduce Mean Time to Restore when issues occur. This preparation enables teams to deploy with confidence, knowing they can quickly revert if needed. Documentation also enables any team member to perform rollbacks, reducing dependency on specific individuals."
    },
    "deployment-window": {
      title: "Schedule Deployment Window",
      content: "While not the end goal, scheduled windows can be a stepping stone toward continuous deployment. They provide predictability and allow for focused attention during deployments. Over time, as confidence grows through other improvements, these windows can be shortened and eventually eliminated."
    },
    "notify-stakeholders": {
      title: "Notify Stakeholders Earlier",
      content: "Communication reduces surprises and builds trust with stakeholders. Early notification allows stakeholders to prepare for changes and provide feedback before deployment. This practice supports the cultural aspects of DevOps transformation and helps build organization-wide support for frequent deployments."
    },
    "share-status": {
      title: "Share Deployment Status",
      content: "Transparent communication about deployment status builds trust and enables rapid response if issues arise. Status sharing also celebrates successful deployments and builds momentum for continuous improvement. It supports the generative culture characteristics identified in Westrum's research."
    },
    "deployment-dashboard": {
      title: "Create Deployment Dashboard",
      content: "Visual dashboards make deployment information accessible to all stakeholders and support data-driven decision making. Dashboards can track DORA metrics over time and highlight improvement trends. This visibility supports both technical and cultural aspects of DevOps transformation."
    }
  };

  // Add event listeners for smallest change radio buttons
  const changeRadios = document.querySelectorAll('input[name="smallest-change"]');
  if (changeRadios.length > 0) {
    changeRadios.forEach(radio => {
      radio.addEventListener('change', function() {
        const feedback = document.getElementById('change-feedback');
        if (feedback) {
          const info = changeInfo[this.value];
          feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
          feedback.classList.add('active');
        }
      });
    });
  }
  
  /* ========================================
   * MEETING LAYOUT FUNCTIONALITY
   * ========================================*/
   
  // Find Discussion Questions sections and add class to their ol elements
  const headings = document.querySelectorAll('h2');
  headings.forEach(heading => {
    if (heading.textContent.includes('Discussion Questions')) {
      const nextOl = heading.nextElementSibling;
      if (nextOl && nextOl.tagName === 'OL') {
        nextOl.classList.add('discussion-questions-list');
      }
    }
  });
  
});