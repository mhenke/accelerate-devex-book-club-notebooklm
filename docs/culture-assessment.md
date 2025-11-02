---
layout: default
title: Culture Assessment
---

<div class="hero-banner" markdown="0">
<div class="hero-content">
<h1 class="hero-headline">Westrum Culture Assessment</h1>
<p class="hero-subtitle">Measure your organizational culture using validated Likert-scale questions</p>
</div>
</div>

<div class="page-container">

<div class="section-card" markdown="0">
  <h2>Purpose & Instructions</h2>

  <p>This assessment measures your organization's culture using Westrum's typology model. Research from "Accelerate" shows that <strong>generative culture strongly predicts both software delivery performance and organizational performance</strong>.</p>
  
  <p>For each statement below, select the rating that best describes your organization (1 = Strongly Disagree, 7 = Strongly Agree). When all 9 questions are answered, your results will appear showing your culture type and specific areas for improvement.</p>
</div>

<!-- Top results placeholder -->
<div class="section-card" id="resultsTopPlaceholder" markdown="0">
  <p class="results-preview-text"><strong>Results preview:</strong> After you answer all 9 questions, a detailed results panel will appear showing your culture type (Pathological, Bureaucratic, or Generative), category breakdown, and specific recommendations for improvement.</p>
</div>

<div class="assessment-container" markdown="0">

<!-- Score Summary Card (sticky) -->
<div class="score-summary" id="scoreSummary">
  <h3><i class="fas fa-chart-bar"></i> Your Progress</h3>
  <div class="overall-score">
    <div class="score-percentage" id="overallPercentage">0.0 <span class="score-label">score</span></div>
    <div class="answered-count" id="answeredCount" aria-live="polite">0/9 questions</div>
  </div>
  <div class="results-placeholder" id="resultsSummaryPlaceholder">Detailed results will appear when all questions are answered.</div>
  <div class="category-scores">
    <div class="category-score">
      <span class="category-name">Information Flow</span>
      <span class="category-value"><span id="infoScore">0.0</span>/7.0</span>
    </div>
    <div class="category-score">
      <span class="category-name">Collaboration</span>
      <span class="category-value"><span id="collabScore">0.0</span>/7.0</span>
    </div>
    <div class="category-score">
      <span class="category-name">Learning & Innovation</span>
      <span class="category-value"><span id="learnScore">0.0</span>/7.0</span>
    </div>
  </div>
  <button type="button" class="btn btn--primary-action assessment-reset-button" id="resetBtn">
    <i class="fas fa-redo"></i> Reset Assessment
  </button>
  <div class="score-circle" aria-hidden="true">
    <span class="score-value" id="overallScore">0.0</span>
    <span class="score-total">/7.0 average</span>
  </div>
</div>

<!-- Assessment Questions -->
<div class="assessment-questions">

<div class="capability-section" data-category="info">
  <h2><i class="fas fa-share-alt"></i> Information Flow (3 questions)</h2>
  <p class="category-description">How information is shared and messengers are treated in your organization</p>

  <div class="capability-item" data-capability="1">
    <h3>1. Information is actively sought</h3>
    <p class="capability-description">Information is proactively shared and people actively look for information that will help them work more effectively.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-1" value="1"> 1 - Strongly Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-1" value="2"> 2 - Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-1" value="3"> 3 - Somewhat Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-1" value="4"> 4 - Neither Agree nor Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-1" value="5"> 5 - Somewhat Agree</label>
      <label class="rating-label"><input type="radio" name="capability-1" value="6"> 6 - Agree</label>
      <label class="rating-label"><input type="radio" name="capability-1" value="7"> 7 - Strongly Agree</label>
    </div>
  </div>

  <div class="capability-item" data-capability="2">
    <h3>2. Messengers are not punished when they deliver news of failures or other bad news</h3>
    <p class="capability-description">People who surface problems are valued, not blamed.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-2" value="1"> 1 - Strongly Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-2" value="2"> 2 - Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-2" value="3"> 3 - Somewhat Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-2" value="4"> 4 - Neither Agree nor Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-2" value="5"> 5 - Somewhat Agree</label>
      <label class="rating-label"><input type="radio" name="capability-2" value="6"> 6 - Agree</label>
      <label class="rating-label"><input type="radio" name="capability-2" value="7"> 7 - Strongly Agree</label>
    </div>
  </div>

  <div class="capability-item" data-capability="3">
    <h3>3. Information is freely shared across organizational boundaries</h3>
    <p class="capability-description">Teams and departments share information openly without hoarding or gatekeeping.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-3" value="1"> 1 - Strongly Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-3" value="2"> 2 - Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-3" value="3"> 3 - Somewhat Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-3" value="4"> 4 - Neither Agree nor Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-3" value="5"> 5 - Somewhat Agree</label>
      <label class="rating-label"><input type="radio" name="capability-3" value="6"> 6 - Agree</label>
      <label class="rating-label"><input type="radio" name="capability-3" value="7"> 7 - Strongly Agree</label>
    </div>
  </div>
</div>

<div class="capability-section" data-category="collab">
  <h2><i class="fas fa-users"></i> Collaboration & Responsibility (3 questions)</h2>
  <p class="category-description">How teams work together and share responsibility</p>

  <div class="capability-item" data-capability="4">
    <h3>4. Responsibilities are shared</h3>
    <p class="capability-description">Teams take collective ownership of outcomes rather than pointing fingers when things go wrong.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-4" value="1"> 1 - Strongly Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-4" value="2"> 2 - Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-4" value="3"> 3 - Somewhat Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-4" value="4"> 4 - Neither Agree nor Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-4" value="5"> 5 - Somewhat Agree</label>
      <label class="rating-label"><input type="radio" name="capability-4" value="6"> 6 - Agree</label>
      <label class="rating-label"><input type="radio" name="capability-4" value="7"> 7 - Strongly Agree</label>
    </div>
  </div>

  <div class="capability-item" data-capability="5">
    <h3>5. Cross-functional collaboration is encouraged and rewarded</h3>
    <p class="capability-description">Working across team boundaries is the norm, not the exception.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-5" value="1"> 1 - Strongly Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-5" value="2"> 2 - Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-5" value="3"> 3 - Somewhat Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-5" value="4"> 4 - Neither Agree nor Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-5" value="5"> 5 - Somewhat Agree</label>
      <label class="rating-label"><input type="radio" name="capability-5" value="6"> 6 - Agree</label>
      <label class="rating-label"><input type="radio" name="capability-5" value="7"> 7 - Strongly Agree</label>
    </div>
  </div>

  <div class="capability-item" data-capability="6">
    <h3>6. Teams are encouraged to bridge between departments</h3>
    <p class="capability-description">Connecting different parts of the organization is valued and supported.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-6" value="1"> 1 - Strongly Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-6" value="2"> 2 - Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-6" value="3"> 3 - Somewhat Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-6" value="4"> 4 - Neither Agree nor Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-6" value="5"> 5 - Somewhat Agree</label>
      <label class="rating-label"><input type="radio" name="capability-6" value="6"> 6 - Agree</label>
      <label class="rating-label"><input type="radio" name="capability-6" value="7"> 7 - Strongly Agree</label>
    </div>
  </div>
</div>

<div class="capability-section" data-category="learn">
  <h2><i class="fas fa-lightbulb"></i> Learning & Innovation (3 questions)</h2>
  <p class="category-description">How your organization treats failure and encourages innovation</p>

  <div class="capability-item" data-capability="7">
    <h3>7. Failure causes inquiry</h3>
    <p class="capability-description">When things go wrong, we ask "what can we learn?" instead of "who is responsible?"</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-7" value="1"> 1 - Strongly Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-7" value="2"> 2 - Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-7" value="3"> 3 - Somewhat Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-7" value="4"> 4 - Neither Agree nor Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-7" value="5"> 5 - Somewhat Agree</label>
      <label class="rating-label"><input type="radio" name="capability-7" value="6"> 6 - Agree</label>
      <label class="rating-label"><input type="radio" name="capability-7" value="7"> 7 - Strongly Agree</label>
    </div>
  </div>

  <div class="capability-item" data-capability="8">
    <h3>8. New ideas are welcomed</h3>
    <p class="capability-description">Innovation and experimentation are encouraged, even if they might fail.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-8" value="1"> 1 - Strongly Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-8" value="2"> 2 - Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-8" value="3"> 3 - Somewhat Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-8" value="4"> 4 - Neither Agree nor Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-8" value="5"> 5 - Somewhat Agree</label>
      <label class="rating-label"><input type="radio" name="capability-8" value="6"> 6 - Agree</label>
      <label class="rating-label"><input type="radio" name="capability-8" value="7"> 7 - Strongly Agree</label>
    </div>
  </div>

  <div class="capability-item" data-capability="9">
    <h3>9. Failures are treated primarily as opportunities to improve the system</h3>
    <p class="capability-description">We focus on systemic improvements rather than individual blame.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-9" value="1"> 1 - Strongly Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-9" value="2"> 2 - Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-9" value="3"> 3 - Somewhat Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-9" value="4"> 4 - Neither Agree nor Disagree</label>
      <label class="rating-label"><input type="radio" name="capability-9" value="5"> 5 - Somewhat Agree</label>
      <label class="rating-label"><input type="radio" name="capability-9" value="6"> 6 - Agree</label>
      <label class="rating-label"><input type="radio" name="capability-9" value="7"> 7 - Strongly Agree</label>
    </div>
  </div>
</div>

</div>

</div>

<!-- Results Section -->
<div class="section-card assessment-results-panel" markdown="0" id="resultsSection">
  <h2><i class="fas fa-trophy"></i> Your Results</h2>

  <div class="results-performance-level">
    <h3 id="performanceLevel">Culture Type</h3>
    <p id="performanceDescription"></p>
  </div>

  <div class="results-breakdown">
    <h3>Category Breakdown</h3>
    <div class="category-breakdown-grid">
      <div class="category-breakdown-item">
        <span class="category-breakdown-name">Information Flow</span>
        <div class="category-breakdown-bar">
          <div class="category-breakdown-fill" id="infoBar"></div>
        </div>
        <span class="category-breakdown-score" id="infoPercent"></span>
      </div>
      <div class="category-breakdown-item">
        <span class="category-breakdown-name">Collaboration & Responsibility</span>
        <div class="category-breakdown-bar">
          <div class="category-breakdown-fill" id="collabBar"></div>
        </div>
        <span class="category-breakdown-score" id="collabPercent"></span>
      </div>
      <div class="category-breakdown-item">
        <span class="category-breakdown-name">Learning & Innovation</span>
        <div class="category-breakdown-bar">
          <div class="category-breakdown-fill" id="learnBar"></div>
        </div>
        <span class="category-breakdown-score" id="learnPercent"></span>
      </div>
    </div>
  </div>

  <div class="results-actions">
    <h3>Recommended Actions</h3>
    <ul id="nextStepsList"></ul>
  </div>

  <div class="results-actions">
    <h3>Related Resources</h3>
    <ul>
      <li><a href="/accelerate-devex-book-club-notebooklm/meetings/meeting-1/">Meeting 1: Foundation - Measuring and Changing Culture</a></li>
      <li><a href="https://github.com/mhenke/accelerate-devex-book-club-notebooklm/blob/main/resources/meetings/meeting-1/handouts/culture-before-metrics.md">Culture Before Metrics - Why culture enables measurement</a></li>
      <li><a href="https://github.com/mhenke/accelerate-devex-book-club-notebooklm/blob/main/resources/meetings/meeting-1/handouts/culture-change-model.md">Acting Your Way to Better Culture - The Virtuous Cycle</a></li>
      <li><a href="/accelerate-devex-book-club-notebooklm/assessment/">24 Capabilities Assessment - Full technical assessment</a></li>
    </ul>
  </div>
</div>

</div>

<!-- Link to jump to results -->
<p class="assessment-results-link">
  <a href="#resultsTopPlaceholder" id="gotoResultsLink" class="btn btn--link">Jump to results</a>
</p>

<script>
// Culture Assessment Logic
(function() {
  const TOTAL_QUESTIONS = 9;
  const MAX_SCORE = 7.0;

  function calculateScores() {
    const scores = {
      info: [],
      collab: [],
      learn: []
    };

    // Map questions to categories
    const categoryMap = {
      info: [1, 2, 3],
      collab: [4, 5, 6],
      learn: [7, 8, 9]
    };

    for (const [category, questions] of Object.entries(categoryMap)) {
      questions.forEach(q => {
        const selected = document.querySelector(`input[name="capability-${q}"]:checked`);
        if (selected) {
          scores[category].push(parseInt(selected.value));
        }
      });
    }

    // Calculate averages
    const averages = {};
    for (const [category, values] of Object.entries(scores)) {
      averages[category] = values.length > 0 
        ? values.reduce((a, b) => a + b, 0) / values.length 
        : 0;
    }

    return averages;
  }

  function updateScoreSummary() {
    const scores = calculateScores();
    const totalAnswered = document.querySelectorAll('input[type="radio"]:checked').length;
    
    // Calculate overall average
    const categoryValues = Object.values(scores);
    const overallScore = categoryValues.length > 0 
      ? categoryValues.reduce((a, b) => a + b, 0) / categoryValues.length 
      : 0;

    // Update display
    document.getElementById('overallScore').textContent = overallScore.toFixed(1);
    document.getElementById('overallPercentage').innerHTML = 
      overallScore.toFixed(1) + ' <span class="score-label">/ 7.0</span>';
    
    document.getElementById('infoScore').textContent = scores.info.toFixed(1);
    document.getElementById('collabScore').textContent = scores.collab.toFixed(1);
    document.getElementById('learnScore').textContent = scores.learn.toFixed(1);

    // Update answered counter
    const answeredEl = document.getElementById('answeredCount');
    if (answeredEl) {
      answeredEl.textContent = `${totalAnswered}/${TOTAL_QUESTIONS} questions`;
    }

    // Show results if all answered
    if (totalAnswered === TOTAL_QUESTIONS) {
      showResults(scores, overallScore);
    }
  }

  function showResults(scores, overallScore) {
    const resultsSection = document.getElementById('resultsSection');
    const topPlaceholder = document.getElementById('resultsTopPlaceholder');
    const summaryPlaceholder = document.getElementById('resultsSummaryPlaceholder');

    // Copy results to top placeholder
    if (topPlaceholder && resultsSection) {
      topPlaceholder.innerHTML = resultsSection.innerHTML;
      topPlaceholder.classList.add('section-card');
    }

    // Hide bottom results panel
    if (resultsSection) {
      resultsSection.style.display = 'none';
    }

    // Hide small summary placeholder
    if (summaryPlaceholder) {
      summaryPlaceholder.style.display = 'none';
    }

    // Scroll to results
    if (topPlaceholder) {
      topPlaceholder.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Determine culture type
    let cultureType, description, recommendations;
    
    if (overallScore >= 6.0) {
      cultureType = 'Generative Culture (High Performance)';
      description = 'Congratulations! Your organization demonstrates strong generative culture characteristics: high cooperation, messengers are valued, shared responsibility, failure drives learning, and innovation is welcomed.';
      recommendations = [
        'Sustain these excellent practices',
        'Share your learnings with other teams',
        'Mentor teams with lower culture scores',
        'Continue to deepen generative practices across the organization'
      ];
    } else if (overallScore >= 4.5) {
      cultureType = 'Bureaucratic-Generative Culture (Medium-High Performance)';
      description = 'Good progress! You\'re moving toward generative culture with some bureaucratic tendencies. You have modest to high cooperation and information flows reasonably well.';
      recommendations = [
        'Increase active information seeking and sharing',
        'Reward messengers who surface problems early',
        'Expand cross-functional collaboration opportunities',
        'Treat more failures as learning opportunities rather than process reviews',
        'Implement blameless postmortems for incidents'
      ];
    } else if (overallScore >= 3.0) {
      cultureType = 'Bureaucratic Culture (Medium Performance)';
      description = 'Opportunity for growth. Your culture follows rules but may limit innovation and adaptability. Messengers may be neglected and responsibilities compartmentalized.';
      recommendations = [
        'Create psychological safety for surfacing problems without punishment',
        'Encourage and reward cross-functional collaboration',
        'Shift from blame to learning when failures occur',
        'Actively seek and share information across organizational boundaries',
        'Implement technical practices like version control, CI/CD, and automated testing to improve culture'
      ];
    } else {
      cultureType = 'Pathological-Bureaucratic Culture (Low Performance)';
      description = 'Significant transformation needed. Your culture may be limiting performance and employee satisfaction with low cooperation, messengers punished or neglected, and novelty crushed or problematic.';
      recommendations = [
        'Secure executive sponsorship for culture change initiatives',
        'Make it safe to surface problems without punishment',
        'Start with one team practicing blameless postmortems',
        'Leaders must demonstrate vulnerability and learning from failure',
        'Implement foundational technical practices (version control, CI, automated testing) that improve culture',
        'Consider external coaching or organizational development support'
      ];
    }

    // Update results display
    document.getElementById('performanceLevel').textContent = cultureType;
    document.getElementById('performanceDescription').textContent = description;

    // Update category bars
    for (const [category, score] of Object.entries(scores)) {
      const percentage = (score / MAX_SCORE) * 100;
      const barId = category + 'Bar';
      const percentId = category + 'Percent';
      
      document.getElementById(barId).style.width = percentage + '%';
      document.getElementById(percentId).textContent = score.toFixed(1) + '/7.0';
    }

    // Generate recommendations list
    const nextStepsList = document.getElementById('nextStepsList');
    nextStepsList.innerHTML = '';
    recommendations.forEach(rec => {
      const li = document.createElement('li');
      li.textContent = rec;
      nextStepsList.appendChild(li);
    });
  }

  function performReset() {
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.checked = false;
    });
    
    document.getElementById('resultsSection').style.display = 'none';
    
    const topPlaceholder = document.getElementById('resultsTopPlaceholder');
    if (topPlaceholder) {
      topPlaceholder.style.display = '';
      topPlaceholder.innerHTML = _topPlaceholderOriginalHTML;
    }
    
    const summaryPlaceholder = document.getElementById('resultsSummaryPlaceholder');
    if (summaryPlaceholder) {
      summaryPlaceholder.style.display = '';
    }
    
    updateScoreSummary();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Store original placeholder HTML
  const _topPlaceholder = document.getElementById('resultsTopPlaceholder');
  const _topPlaceholderOriginalHTML = _topPlaceholder ? _topPlaceholder.innerHTML : '';

  // Event listeners
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', updateScoreSummary);
  });

  document.getElementById('resetBtn').addEventListener('click', function(e) {
    e.preventDefault();
    performReset();
  });

  const gotoLink = document.getElementById('gotoResultsLink');
  if (gotoLink) {
    gotoLink.addEventListener('click', function(e) {
      e.preventDefault();
      const topPlaceholder = document.getElementById('resultsTopPlaceholder');
      if (topPlaceholder) {
        topPlaceholder.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Initialize
  updateScoreSummary();
})();
</script>

<style>
.assessment-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
}

.score-summary {
  position: sticky;
  top: var(--space-lg);
  height: fit-content;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.score-summary h3 {
  margin: 0 0 var(--space-md) 0;
  font-size: var(--font-size-h4);
}

.overall-score {
  text-align: center;
  margin-bottom: var(--space-lg);
}

.score-percentage {
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  margin-bottom: var(--space-sm);
  color: #fff;
}

.score-percentage .score-label {
  font-size: 0.45em;
  opacity: 0.95;
  margin-left: 0.25rem;
  vertical-align: middle;
  display: inline-block;
}

.results-placeholder {
  margin-top: var(--space-sm);
  font-size: 0.95rem;
  opacity: 0.95;
  text-align: center;
}

.score-circle {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--space-xs);
  margin-top: var(--space-md);
}

.score-value {
  font-size: 1.3rem;
  font-weight: var(--font-weight-semibold);
  line-height: 1;
}

.score-total {
  font-size: 0.95rem;
  opacity: 0.85;
}

.answered-count {
  font-size: 1rem;
  font-weight: var(--font-weight-semibold);
  color: rgba(255, 255, 255, 0.95);
}

.category-scores {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.category-score {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-xs);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
}

.category-name {
  opacity: 0.9;
}

.category-value {
  font-weight: var(--font-weight-semibold);
}

.assessment-questions {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.capability-section {
  background: white;
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.capability-section h2 {
  margin-top: 0;
  color: var(--color-primary);
  padding-bottom: var(--space-sm);
  border-bottom: 2px solid var(--color-primary);
}

.category-description {
  color: #666;
  font-style: italic;
  margin-top: var(--space-xs);
  margin-bottom: var(--space-md);
}

.capability-item {
  margin-top: var(--space-lg);
  padding: var(--space-md);
  background: #f8f9fa;
  border-radius: var(--radius-sm);
}

.capability-item h3 {
  margin: 0 0 var(--space-xs) 0;
  color: #2c3e50;
  font-size: var(--font-size-h6);
}

.capability-description {
  margin: 0 0 var(--space-md) 0;
  color: #555;
  font-size: 0.95rem;
}

.rating-group {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.rating-label {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  cursor: pointer;
  font-size: 0.9rem;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  transition: background-color 0.2s;
}

.rating-label:hover {
  background: rgba(0, 0, 0, 0.05);
}

.rating-label input[type="radio"] {
  cursor: pointer;
}

.results-performance-level {
  text-align: center;
  padding: var(--space-lg);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: var(--radius-md);
  margin-bottom: var(--space-lg);
}

.results-performance-level h3 {
  margin: 0 0 var(--space-sm) 0;
  font-size: var(--font-size-h3);
}

.results-performance-level p {
  margin: 0;
  font-size: var(--font-size-body);
  opacity: 0.9;
}

.results-breakdown {
  margin-bottom: var(--space-lg);
}

.category-breakdown-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-md);
}

.category-breakdown-item {
  display: grid;
  grid-template-columns: 200px 1fr 80px;
  gap: var(--space-md);
  align-items: center;
}

.category-breakdown-name {
  font-weight: var(--font-weight-semibold);
  color: #2c3e50;
}

.category-breakdown-bar {
  height: 24px;
  background: #e9ecef;
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.category-breakdown-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transition: width 0.5s ease-out;
}

.category-breakdown-score {
  text-align: right;
  font-weight: var(--font-weight-semibold);
  color: #667eea;
}

.results-actions ul {
  margin: var(--space-md) 0 0 var(--space-lg);
}

.results-actions li {
  margin-bottom: var(--space-sm);
}

@media (max-width: 1024px) {
  .assessment-container {
    grid-template-columns: 1fr;
  }

  .score-summary {
    position: static;
  }

  .category-breakdown-item {
    grid-template-columns: 1fr;
    gap: var(--space-xs);
  }

  .category-breakdown-score {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .rating-group {
    flex-direction: column;
    gap: var(--space-xs);
  }

  .rating-label {
    padding: var(--space-sm);
  }
}
</style>
