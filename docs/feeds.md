---
layout: default
title: 'RSS Feeds & Downloads'
permalink: /feeds/
---

<div class="hero-banner" markdown="0">
<div class="hero-content">
<h1 class="hero-headline"><i class="fas fa-rss"></i> Subscribe to Audio & Video Feeds</h1>
<p class="hero-subtitle">Get the latest DevOps insights delivered automatically to your favorite podcast or video app</p>
</div>
</div>

<div class="page-container">

<div class="section-card" markdown="0">
<h2><i class="fas fa-podcast"></i> Podcast Feed</h2>

<p>Subscribe to audio-only episodes covering key concepts from each meeting. Perfect for commutes and learning on-the-go.</p>

<div class="feed-subscription-box">
  <div class="feed-url-container">
    <label for="podcast-feed-url"><strong>Podcast RSS URL:</strong></label>
    <input type="text" id="podcast-feed-url" value="{{ site.url }}{{ site.baseurl }}/podcast.xml" readonly>
    <button type="button" onclick="copyToClipboard('podcast-feed-url', this)" class="copy-btn">
      <i class="fas fa-copy"></i> Copy
    </button>
  </div>
  <div class="feed-actions">
    <a href="{{ site.baseurl }}/podcast.xml" class="btn btn--primary-action" target="_blank">
      <i class="fas fa-rss"></i> VIEW FEED
    </a>
    <a href="https://podcasts.apple.com/podcast/subscribe?url={{ site.url | url_encode }}{{ site.baseurl | url_encode }}/podcast.xml" class="btn btn--secondary" target="_blank">
      <i class="fab fa-apple"></i> Apple Podcasts
    </a>
    <a href="https://open.spotify.com/show/rss?url={{ site.url | url_encode }}{{ site.baseurl | url_encode }}/podcast.xml" class="btn btn--secondary" target="_blank">
      <i class="fab fa-spotify"></i> Spotify
    </a>
  </div>
</div>
</div>

<div class="section-card" markdown="0">
<h2><i class="fas fa-video"></i> Video Feed</h2>

<p>Subscribe to video series covering visual explanations and meeting overviews.</p>

<div class="feed-subscription-box">
  <div class="feed-url-container">
    <label for="video-feed-url"><strong>Video RSS URL:</strong></label>
    <input type="text" id="video-feed-url" value="{{ site.url }}{{ site.baseurl }}/videos.xml" readonly>
    <button type="button" onclick="copyToClipboard('video-feed-url', this)" class="copy-btn">
      <i class="fas fa-copy"></i> Copy
    </button>
  </div>
  <div class="feed-actions">
    <a href="{{ site.baseurl }}/videos.xml" class="btn btn--primary-action" target="_blank">
      <i class="fas fa-rss"></i> VIEW FEED
    </a>
  </div>
</div>
</div>

<div class="section-card" markdown="0">
<h2><i class="fas fa-files"></i> Combined Media Feed</h2>

<p>Subscribe to all audio and video content in one comprehensive feed.</p>

<div class="feed-subscription-box">
  <div class="feed-url-container">
    <label for="media-feed-url"><strong>Complete Media RSS URL:</strong></label>
    <input type="text" id="media-feed-url" value="{{ site.url }}{{ site.baseurl }}/media-feed.xml" readonly>
    <button type="button" onclick="copyToClipboard('media-feed-url', this)" class="copy-btn">
      <i class="fas fa-copy"></i> Copy
    </button>
  </div>
  <div class="feed-actions">
    <a href="{{ site.baseurl }}/media-feed.xml" class="btn btn--primary-action" target="_blank">
      <i class="fas fa-rss"></i> VIEW FEED
    </a>
  </div>
</div>
</div>

</div>
