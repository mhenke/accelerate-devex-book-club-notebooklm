---
layout: default
title: 'RSS Feeds & Downloads'
permalink: /feeds/
---

# <i class="fas fa-rss"></i> RSS Feeds & Media Downloads

Subscribe to our RSS feeds to get the latest podcast episodes and videos delivered automatically, or download individual files directly.

## <i class="fas fa-podcast"></i> Podcast Feeds

### Audio Podcast Feed

Subscribe to get audio-only podcast episodes covering each meeting's content:

<div class="feed-subscription-box">
  <p class="text-center mt-lg">
    <a href="/accelerate-devex-book-club-notebooklm/feeds/" class="btn btn-feeds">Explore RSS Feeds & Downloads</a>
  </p>
  <div class="feed-url-container">
    <label for="podcast-feed-url">Podcast RSS URL:</label>
    <input type="text" id="podcast-feed-url" value="{{ site.url }}{{ site.baseurl }}/podcast.xml" readonly>
    <button type="button" onclick="copyToClipboard('podcast-feed-url')" class="copy-btn">
      <i class="fas fa-copy"></i> Copy
    </button>
  </div>
  <div class="feed-actions">
    <a href="{{ site.baseurl }}/podcast.xml" class="feed-link" target="_blank">
      <i class="fas fa-rss"></i> View RSS Feed
    </a>
    <a href="https://podcasts.apple.com/podcast/subscribe?url={{ site.url | url_encode }}{{ site.baseurl | url_encode }}/podcast.xml" class="subscribe-link apple" target="_blank">
      <i class="fab fa-apple"></i> Apple Podcasts
    </a>
    <a href="https://open.spotify.com/show/rss?url={{ site.url | url_encode }}{{ site.baseurl | url_encode }}/podcast.xml" class="subscribe-link spotify" target="_blank">
      <i class="fab fa-spotify"></i> Spotify
    </a>
  </div>
</div>
