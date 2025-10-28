---
layout: default
title: 24 Capabilities Assessment
---

<div class="hero-banner" markdown="0">
<div class="hero-content">
<h1 class="hero-headline">24 Capabilities Self-Assessment</h1>
<p class="hero-subtitle">Evaluate your team's current state and identify improvement opportunities</p>
</div>
</div>

<div class="page-container">

<div class="section-card" markdown="0">
  <h2>Purpose & Instructions</h2>

  <p>If you're running this with your team, use the 24-item assessment to quickly establish a baseline and highlight priority improvement areas. Select a 1–5 rating for each capability (1 = Not at all, 5 = Always). When all items are answered, a results summary will appear.</p>
</div>

<!-- Top results placeholder: explains where results will appear once assessment is complete -->
<div class="section-card" id="resultsTopPlaceholder" markdown="0">
  <p class="results-preview-text"><strong>Results preview:</strong> After you answer all 24 questions a detailed results panel will appear below and here showing your performance level, category breakdown, and suggested next steps.</p>
</div>

<div class="assessment-container" markdown="0">

<!-- Score Summary Card (sticky) -->
<div class="score-summary" id="scoreSummary">
  <h3><i class="fas fa-chart-bar"></i> Your Progress</h3>
  <div class="overall-score">
    <div class="score-percentage" id="overallPercentage">0% <span class="score-label">score</span></div>
    <div class="answered-count" id="answeredCount" aria-live="polite">0/24 questions</div>
  </div>
  <div class="results-placeholder" id="resultsSummaryPlaceholder">Detailed results will appear in the "Your Results" panel when all questions are answered.</div>
  <div class="category-scores">
    <div class="category-score">
      <span class="category-name">Continuous Delivery</span>
      <span class="category-value"><span id="cdScore">0</span>/40</span>
    </div>
    <div class="category-score">
      <span class="category-name">Architecture</span>
      <span class="category-value"><span id="archScore">0</span>/10</span>
    </div>
    <div class="category-score">
      <span class="category-name">Product & Process</span>
      <span class="category-value"><span id="productScore">0</span>/20</span>
    </div>
    <div class="category-score">
      <span class="category-name">Lean Management</span>
      <span class="category-value"><span id="leanScore">0</span>/25</span>
    </div>
    <div class="category-score">
      <span class="category-name">Culture</span>
      <span class="category-value"><span id="cultureScore">0</span>/25</span>
    </div>
    <div class="category-score">
      <span class="category-name">Leadership</span>
      <span class="category-value"><span id="leadershipScore">0</span>/10</span>
    </div>
  </div>
  <button type="button" class="btn btn--primary-action assessment-reset-button" id="resetBtn">
    <i class="fas fa-redo"></i> Reset Assessment
  </button>
  <div class="score-circle" aria-hidden="true" aria-label="Raw score">
    <span class="score-value" id="overallScore">0</span>
    <span class="score-total">/120 score total</span>
  </div>
</div>

<!-- Accessible confirmation dialog for Reset -->
<dialog id="confirmResetDialog" aria-labelledby="confirmResetTitle" aria-describedby="confirmResetDesc">
  <form method="dialog" class="confirm-reset-form">
    <h2 id="confirmResetTitle">Reset assessment?</h2>
    <p id="confirmResetDesc">This will clear all answers you have selected. This action cannot be undone. Do you want to continue?</p>
    <div class="dialog-actions">
      <button id="confirmResetConfirm" type="button" class="btn btn--primary-action">Reset</button>
      <button id="confirmResetCancel" type="button" class="btn">Cancel</button>
    </div>
  </form>
</dialog>

<!-- Assessment Questions -->
<div class="assessment-questions">

<div class="capability-section" data-category="cd">
  <h2><i class="fas fa-rocket"></i> Continuous Delivery Capabilities (8)</h2>

  <div class="capability-item" data-capability="1">
    <h3>1. Version Control</h3>
    <p class="capability-description">All production artifacts are stored in version control (application code, infrastructure code, configuration files, scripts).</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-1" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-1" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-1" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-1" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-1" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="2">
    <h3>2. Deployment Automation</h3>
    <p class="capability-description">Software deployments are fully automated and do not require manual intervention.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-2" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-2" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-2" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-2" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-2" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="3">
    <h3>3. Continuous Integration</h3>
    <p class="capability-description">Code is regularly merged to trunk/main, with automated builds and tests running on every commit.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-3" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-3" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-3" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-3" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-3" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="4">
    <h3>4. Trunk-Based Development</h3>
    <p class="capability-description">Developers work in small batches on short-lived branches (less than one day) or directly on trunk.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-4" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-4" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-4" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-4" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-4" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="5">
    <h3>5. Test Automation</h3>
    <p class="capability-description">Developers primarily create and maintain automated tests (unit, integration, acceptance).</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-5" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-5" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-5" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-5" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-5" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="6">
    <h3>6. Test Data Management</h3>
    <p class="capability-description">Test data is readily available and teams can easily acquire test data for automated testing.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-6" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-6" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-6" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-6" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-6" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="7">
    <h3>7. Shift-Left Security</h3>
    <p class="capability-description">Security is integrated throughout the software delivery process (reviews, testing, collaboration).</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-7" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-7" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-7" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-7" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-7" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="8">
    <h3>8. Continuous Delivery (CD)</h3>
    <p class="capability-description">Software is in a deployable state throughout its lifecycle, and deployments can happen on demand.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-8" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-8" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-8" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-8" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-8" value="5"> 5 - Always</label>
    </div>
  </div>
</div>

<div class="capability-section" data-category="arch">
  <h2><i class="fas fa-sitemap"></i> Architecture Capabilities (2)</h2>

  <div class="capability-item" data-capability="9">
    <h3>9. Loosely Coupled Architecture</h3>
    <p class="capability-description">Teams can deploy and test on demand without requiring integrated environments or coordination with other teams.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-9" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-9" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-9" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-9" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-9" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="10">
    <h3>10. Empowered Teams</h3>
    <p class="capability-description">Teams can choose their own tools and make significant changes to systems without depending on other teams.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-10" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-10" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-10" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-10" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-10" value="5"> 5 - Always</label>
    </div>
  </div>
</div>

<div class="capability-section" data-category="product">
  <h2><i class="fas fa-lightbulb"></i> Product & Process Capabilities (4)</h2>

  <div class="capability-item" data-capability="11">
    <h3>11. Customer Feedback</h3>
    <p class="capability-description">Teams actively and regularly seek customer feedback and incorporate it into product design.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-11" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-11" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-11" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-11" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-11" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="12">
    <h3>12. Value Stream</h3>
    <p class="capability-description">The flow of work from business to customers is well-understood and visible to teams.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-12" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-12" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-12" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-12" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-12" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="13">
    <h3>13. Working in Small Batches</h3>
    <p class="capability-description">Work is decomposed into small pieces that can be completed in less than a week.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-13" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-13" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-13" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-13" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-13" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="14">
    <h3>14. Team Experimentation</h3>
    <p class="capability-description">Teams have authority to try new ideas and change specifications without external approval.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-14" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-14" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-14" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-14" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-14" value="5"> 5 - Always</label>
    </div>
  </div>
</div>

<div class="capability-section" data-category="lean">
  <h2><i class="fas fa-chart-line"></i> Lean Management & Monitoring Capabilities (5)</h2>

  <div class="capability-item" data-capability="15">
    <h3>15. Change Approval Process</h3>
    <p class="capability-description">Change approval is lightweight (peer review, pair programming) rather than external approval boards.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-15" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-15" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-15" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-15" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-15" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="16">
    <h3>16. Monitoring & Observability</h3>
    <p class="capability-description">Systems are proactively monitored with alerts for business/technical metrics, enabling fast problem detection.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-16" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-16" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-16" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-16" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-16" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="17">
    <h3>17. Proactive Notifications</h3>
    <p class="capability-description">Teams receive automated alerts when system health or quality degrades below acceptable thresholds.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-17" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-17" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-17" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-17" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-17" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="18">
    <h3>18. Work-in-Progress (WIP) Limits</h3>
    <p class="capability-description">Teams use WIP limits to expose and address systemic problems in the flow of work.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-18" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-18" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-18" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-18" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-18" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="19">
    <h3>19. Visualizing Work</h3>
    <p class="capability-description">Work and workflow are made visible through tools like Kanban boards and dashboards.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-19" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-19" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-19" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-19" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-19" value="5"> 5 - Always</label>
    </div>
  </div>
</div>

<div class="capability-section" data-category="culture">
  <h2><i class="fas fa-users"></i> Cultural Capabilities (5)</h2>

  <div class="capability-item" data-capability="20">
    <h3>20. Westrum Organizational Culture</h3>
    <p class="capability-description">The organization demonstrates generative culture traits: high cooperation, shared risks, novelty implementation.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-20" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-20" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-20" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-20" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-20" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="21">
    <h3>21. Supporting Learning</h3>
    <p class="capability-description">Teams are encouraged to learn, with time and resources allocated for training, conferences, and experimentation.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-21" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-21" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-21" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-21" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-21" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="22">
    <h3>22. Collaboration Among Teams</h3>
    <p class="capability-description">Cross-functional collaboration is encouraged and supported, not siloed by department.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-22" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-22" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-22" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-22" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-22" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="23">
    <h3>23. Job Satisfaction</h3>
    <p class="capability-description">Employees have meaningful work, learning opportunities, team support, and the right tools to do their jobs.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-23" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-23" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-23" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-23" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-23" value="5"> 5 - Always</label>
    </div>
  </div>

  <div class="capability-item" data-capability="24">
    <h3>24. Transformational Leadership</h3>
    <p class="capability-description">Leaders demonstrate vision, inspirational communication, intellectual stimulation, supportive leadership, and personal recognition.</p>
    <div class="rating-group">
      <label class="rating-label"><input type="radio" name="capability-24" value="1"> 1 - Not at all</label>
      <label class="rating-label"><input type="radio" name="capability-24" value="2"> 2 - Rarely</label>
      <label class="rating-label"><input type="radio" name="capability-24" value="3"> 3 - Sometimes</label>
      <label class="rating-label"><input type="radio" name="capability-24" value="4"> 4 - Often</label>
      <label class="rating-label"><input type="radio" name="capability-24" value="5"> 5 - Always</label>
    </div>
  </div>
</div>

</div>

</div>

<!-- Results Section -->
  <div class="section-card assessment-results-panel" markdown="0" id="resultsSection">
  <h2><i class="fas fa-trophy"></i> Your Results</h2>

    <div class="results-performance-level">
    <h3 id="performanceLevel">Performance Level</h3>
    <p id="performanceDescription"></p>
  </div>

  <div class="results-breakdown">
    <h3>Category Breakdown</h3>
    <div class="category-breakdown-grid">
      <div class="category-breakdown-item">
        <span class="category-breakdown-name">Continuous Delivery</span>
        <div class="category-breakdown-bar">
          <div class="category-breakdown-fill" id="cdBar"></div>
        </div>
        <span class="category-breakdown-score" id="cdPercent"></span>
      </div>
      <div class="category-breakdown-item">
        <span class="category-breakdown-name">Architecture</span>
        <div class="category-breakdown-bar">
          <div class="category-breakdown-fill" id="archBar"></div>
        </div>
        <span class="category-breakdown-score" id="archPercent"></span>
      </div>
      <div class="category-breakdown-item">
        <span class="category-breakdown-name">Product & Process</span>
        <div class="category-breakdown-bar">
          <div class="category-breakdown-fill" id="productBar"></div>
        </div>
        <span class="category-breakdown-score" id="productPercent"></span>
      </div>
      <div class="category-breakdown-item">
        <span class="category-breakdown-name">Lean Management</span>
        <div class="category-breakdown-bar">
          <div class="category-breakdown-fill" id="leanBar"></div>
        </div>
        <span class="category-breakdown-score" id="leanPercent"></span>
      </div>
      <div class="category-breakdown-item">
        <span class="category-breakdown-name">Culture</span>
        <div class="category-breakdown-bar">
          <div class="category-breakdown-fill" id="cultureBar"></div>
        </div>
        <span class="category-breakdown-score" id="culturePercent"></span>
      </div>
      <div class="category-breakdown-item">
        <span class="category-breakdown-name">Leadership</span>
        <div class="category-breakdown-bar">
          <div class="category-breakdown-fill" id="leadershipBar"></div>
        </div>
        <span class="category-breakdown-score" id="leadershipPercent"></span>
      </div>
    </div>
  </div>

  <div class="results-actions">
    <h3>Next Steps</h3>
    <ul id="nextStepsList"></ul>
  </div>
</div>

</div>

<!-- Link to jump to results/placeholder (autoscroll) -->
<p class="assessment-results-link">
  <a href="#resultsTopPlaceholder" id="gotoResultsLink" class="btn btn--link">Jump to results</a>
</p>

<script>
// Assessment logic
(function() {
  const categoryMaxScores = {
    cd: 40,
    arch: 10,
    product: 20,
    lean: 25,
    culture: 25,
    leadership: 10
  };

  const categoryNames = {
    cd: 'Continuous Delivery',
    arch: 'Architecture',
    product: 'Product & Process',
    lean: 'Lean Management',
    culture: 'Culture',
    leadership: 'Leadership'
  };

  function calculateScores() {
    const scores = {
      cd: 0,
      arch: 0,
      product: 0,
      lean: 0,
      culture: 0,
      leadership: 0
    };

    // Map capabilities to categories
    const categoryMap = {
      cd: [1, 2, 3, 4, 5, 6, 7, 8],
      arch: [9, 10],
      product: [11, 12, 13, 14],
      lean: [15, 16, 17, 18, 19],
      culture: [20, 21, 22, 23],
      leadership: [24]
    };

    for (const [category, capabilities] of Object.entries(categoryMap)) {
      capabilities.forEach(cap => {
        const selected = document.querySelector(`input[name="capability-${cap}"]:checked`);
        if (selected) {
          scores[category] += parseInt(selected.value);
        }
      });
    }

    return scores;
  }

  function updateScoreSummary() {
    const scores = calculateScores();
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    const totalPercentage = Math.round((totalScore / 120) * 100);

    document.getElementById('overallScore').textContent = totalScore;
    document.getElementById('overallPercentage').innerHTML = totalPercentage + '% <span class="score-label">score</span>';

    document.getElementById('cdScore').textContent = scores.cd;
    document.getElementById('archScore').textContent = scores.arch;
    document.getElementById('productScore').textContent = scores.product;
    document.getElementById('leanScore').textContent = scores.lean;
    document.getElementById('cultureScore').textContent = scores.culture;
    document.getElementById('leadershipScore').textContent = scores.leadership;

    // Update answered counter and show results if all answered
    const totalAnswered = document.querySelectorAll('input[type="radio"]:checked').length;
    const answeredEl = document.getElementById('answeredCount');
    if (answeredEl) { answeredEl.textContent = `${totalAnswered}/24 questions`; }
    if (totalAnswered === 24) {
      showResults(scores, totalScore, totalPercentage);
    }
  }

  function showResults(scores, totalScore, totalPercentage) {
    const resultsSection = document.getElementById('resultsSection');
    const topPlaceholder = document.getElementById('resultsTopPlaceholder');
    const summaryPlaceholder = document.getElementById('resultsSummaryPlaceholder');

    // Instead of showing the full results at the bottom, copy the results HTML
    // to the top placeholder and hide the bottom panel so results aren't duplicated.
    if (topPlaceholder && resultsSection) {
      // copy results content into top placeholder
      topPlaceholder.innerHTML = resultsSection.innerHTML;
      // mark it so styles apply consistently
      topPlaceholder.classList.add('section-card');
    }

    // hide the bottom results panel
    if (resultsSection) { resultsSection.style.display = 'none'; }

    // hide the small summary placeholder inside the score card
    if (summaryPlaceholder) { summaryPlaceholder.style.display = 'none'; }

    // scroll to the top placeholder where results now appear
    if (topPlaceholder) { topPlaceholder.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

    // Determine performance level
    let level, description;
    if (totalPercentage >= 80) {
      level = 'High Performer';
      description = 'Excellent! Your team demonstrates strong capabilities across most areas. Focus on sustaining and refining these practices.';
    } else if (totalPercentage >= 60) {
      level = 'Medium-High Performer';
      description = 'Good progress! You have solid foundations. Identify specific gaps in lower-scoring categories to address.';
    } else if (totalPercentage >= 40) {
      level = 'Medium Performer';
      description = 'You have opportunities for significant improvement. Focus on building capabilities in your lowest-scoring areas.';
    } else if (totalPercentage >= 20) {
      level = 'Emerging Performer';
      description = 'Start with foundational capabilities like version control, CI, and building a learning culture.';
    } else {
      level = 'Early Stage';
      description = 'Focus on building CD and cultural foundations. Small improvements will have significant impact.';
    }

    document.getElementById('performanceLevel').textContent = level;
    document.getElementById('performanceDescription').textContent = description;

    // Update category bars
    for (const [category, score] of Object.entries(scores)) {
      const percentage = Math.round((score / categoryMaxScores[category]) * 100);
      document.getElementById(`${category}Bar`).style.width = percentage + '%';
      document.getElementById(`${category}Percent`).textContent = percentage + '%';
    }

    // Generate next steps
    const sortedCategories = Object.entries(scores)
      .map(([cat, score]) => ({
        category: cat,
        score: score,
        percentage: Math.round((score / categoryMaxScores[cat]) * 100)
      }))
      .sort((a, b) => a.percentage - b.percentage);

    const nextStepsList = document.getElementById('nextStepsList');
    nextStepsList.innerHTML = '';

    sortedCategories.slice(0, 3).forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${index + 1}. ${categoryNames[item.category]}</strong> - Current: ${item.percentage}%. This is a priority area for improvement.`;
      nextStepsList.appendChild(li);
    });
  }


  // Perform the actual reset of the assessment (clears radios, hides results)
  function performReset() {
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.checked = false;
    });
    document.getElementById('resultsSection').style.display = 'none';
    // restore placeholders
    const topPlaceholder = document.getElementById('resultsTopPlaceholder');
    if (topPlaceholder) { topPlaceholder.style.display = ''; topPlaceholder.innerHTML = _topPlaceholderOriginalHTML; }
    const summaryPlaceholder = document.getElementById('resultsSummaryPlaceholder');
    if (summaryPlaceholder) { summaryPlaceholder.style.display = ''; }
    updateScoreSummary();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // store original top placeholder so we can restore on reset
  const _topPlaceholder = document.getElementById('resultsTopPlaceholder');
  const _topPlaceholderOriginalHTML = _topPlaceholder ? _topPlaceholder.innerHTML : '';

  // Accessible confirmation dialog handling
  const confirmDialog = document.getElementById('confirmResetDialog');
  const confirmBtn = document.getElementById('confirmResetConfirm');
  const cancelBtn = document.getElementById('confirmResetCancel');
  let _previousActiveElement = null;

  function openConfirmDialog() {
    _previousActiveElement = document.activeElement;
    if (confirmDialog && typeof confirmDialog.showModal === 'function') {
      confirmDialog.showModal();
    } else if (confirmDialog) {
      // Fallback for browsers without <dialog>
      confirmDialog.setAttribute('open', '');
    }
    // Move focus to the confirm button for keyboard users
    if (confirmBtn) {confirmBtn.focus();}
  }

  function closeConfirmDialog() {
    if (confirmDialog && typeof confirmDialog.close === 'function') {
      try { confirmDialog.close(); } catch (e) { /* ignore */ }
    } else if (confirmDialog) {
      confirmDialog.removeAttribute('open');
    }
    if (_previousActiveElement) {_previousActiveElement.focus();}
  }

  // Wire dialog buttons
  if (confirmBtn) {
    confirmBtn.addEventListener('click', function () {
      performReset();
      closeConfirmDialog();
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', function () {
      closeConfirmDialog();
    });
  }

  // Close dialog on escape when using the fallback open attribute
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && confirmDialog && confirmDialog.hasAttribute && confirmDialog.hasAttribute('open')) {
      closeConfirmDialog();
    }
  });

  // Event listeners
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', updateScoreSummary);
  });

  document.getElementById('resetBtn').addEventListener('click', function (e) {
    e.preventDefault();
    openConfirmDialog();
  });

  // smooth-scroll link from the bottom to the results placeholder at top
  const gotoLink = document.getElementById('gotoResultsLink');
  if (gotoLink) {
    gotoLink.addEventListener('click', function (e) {
      e.preventDefault();
      const topPlaceholder = document.getElementById('resultsTopPlaceholder');
      if (topPlaceholder) { topPlaceholder.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
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

.score-circle {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: var(--space-sm);
}

.score-percentage {
  font-size: 3rem; /* make percentage visually dominant */
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
  font-size: 1.3rem; /* smaller, secondary */
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
  color: rgba(255,255,255,0.95);
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


