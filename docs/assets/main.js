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
  
});