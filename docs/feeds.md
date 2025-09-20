---
layout: default
title: RSS Feeds & Downloads
permalink: /feeds/
---

# <i class="fas fa-rss"></i> RSS Feeds & Media Downloads

Subscribe to our RSS feeds to get the latest podcast episodes and videos delivered automatically, or download individual files directly.

---

## <i class="fas fa-podcast"></i> Podcast Feeds

### Audio Podcast Feed
Subscribe to get audio-only podcast episodes covering each meeting's content:

<div class="feed-subscription-box">
  <div class="feed-url-container">
    <label for="podcast-feed-url">Podcast RSS URL:</label>
    <input type="text" id="podcast-feed-url" value="{{ site.url }}{{ site.baseurl }}/podcast.xml" readonly>
    <button onclick="copyToClipboard('podcast-feed-url')" class="copy-btn">
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

---

## <i class="fas fa-video"></i> Video Feeds

### Video Content Feed
Subscribe to get video presentations for each meeting:

<div class="feed-subscription-box">
  <div class="feed-url-container">
    <label for="video-feed-url">Video RSS URL:</label>
    <input type="text" id="video-feed-url" value="{{ site.url }}{{ site.baseurl }}/videos.xml" readonly>
    <button onclick="copyToClipboard('video-feed-url')" class="copy-btn">
      <i class="fas fa-copy"></i> Copy
    </button>
  </div>
  
  <div class="feed-actions">
    <a href="{{ site.baseurl }}/videos.xml" class="feed-link" target="_blank">
      <i class="fas fa-rss"></i> View RSS Feed
    </a>
    <a href="https://www.youtube.com/feed/rss?url={{ site.url | url_encode }}{{ site.baseurl | url_encode }}/videos.xml" class="subscribe-link youtube" target="_blank">
      <i class="fab fa-youtube"></i> YouTube RSS
    </a>
  </div>
</div>

---

## <i class="fas fa-download"></i> Complete Media Feed

### Combined Audio & Video Feed
Get everything in one feed - both podcast episodes and videos:

<div class="feed-subscription-box">
  <div class="feed-url-container">
    <label for="complete-feed-url">Complete Media RSS URL:</label>
    <input type="text" id="complete-feed-url" value="{{ site.url }}{{ site.baseurl }}/media-feed.xml" readonly>
    <button onclick="copyToClipboard('complete-feed-url')" class="copy-btn">
      <i class="fas fa-copy"></i> Copy
    </button>
  </div>
  
  <div class="feed-actions">
    <a href="{{ site.baseurl }}/media-feed.xml" class="feed-link" target="_blank">
      <i class="fas fa-rss"></i> View RSS Feed
    </a>
  </div>
</div>

---

## <i class="fas fa-cloud-download-alt"></i> Direct Downloads

Download individual audio and video files directly:

<div class="downloads-grid">
  {% assign meetings = site.meetings | sort: 'week' %}
  {% for meeting in meetings %}
  <div class="download-card">
    <div class="download-header">
      <h3>{{ meeting.title }}</h3>
      <p>{{ meeting.subtitle }}</p>
      <div class="meeting-meta">
        <span class="meeting-week">Week {{ meeting.week }}</span>
        <span class="meeting-chapters">Chapters {{ meeting.chapters }}</span>
      </div>
    </div>
    
    <div class="download-options">
      <div class="download-option audio">
        <div class="download-info">
          <i class="fas fa-headphones"></i>
          <span>Podcast Audio</span>
          <small>M4A Format</small>
        </div>
        <div class="download-actions">
          <a href="{{ site.baseurl }}/assets/media/meeting-{{ meeting.week }}-podcast.m4a" download class="download-btn">
            <i class="fas fa-download"></i> Download
          </a>
          <a href="{{ site.baseurl }}/assets/media/meeting-{{ meeting.week }}-podcast.m4a" target="_blank" class="stream-btn">
            <i class="fas fa-play"></i> Stream
          </a>
        </div>
      </div>
      
      <div class="download-option video">
        <div class="download-info">
          <i class="fas fa-video"></i>
          <span>Video Content</span>
          <small>MP4 Format</small>
        </div>
        <div class="download-actions">
          <a href="{{ site.baseurl }}/assets/media/meeting-{{ meeting.week }}-video.mp4" download class="download-btn">
            <i class="fas fa-download"></i> Download
          </a>
          <a href="{{ site.baseurl }}/assets/media/meeting-{{ meeting.week }}-video.mp4" target="_blank" class="stream-btn">
            <i class="fas fa-play"></i> Stream
          </a>
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

---

## <i class="fas fa-question-circle"></i> How to Use RSS Feeds

### For Podcasts:
1. **Copy the Podcast RSS URL** from above
2. **Open your podcast app** (Apple Podcasts, Spotify, Google Podcasts, etc.)
3. **Look for "Add Podcast" or "Subscribe"** option
4. **Paste the RSS URL** and subscribe
5. **New episodes will download automatically** when published

### For Videos:
1. **Copy the Video RSS URL** from above
2. **Use an RSS reader** (Feedly, Inoreader, etc.) or video aggregator
3. **Add the feed** to get notifications of new video content
4. **Click through to watch or download** videos directly

### For Both:
- Use the **Complete Media Feed** to get everything in one subscription
- Perfect for RSS readers that handle both audio and video content

---

## <i class="fas fa-mobile-alt"></i> Recommended Apps

### Podcast Apps:
- **Apple Podcasts** (iOS/macOS)
- **Spotify** (Cross-platform)
- **Google Podcasts** (Android/Web)
- **Overcast** (iOS)
- **Pocket Casts** (Cross-platform)

### RSS Readers:
- **Feedly** (Web/Mobile)
- **Inoreader** (Web/Mobile)
- **NewsBlur** (Web/Mobile)
- **RSS Guard** (Desktop)

<style>
/* Feed Subscription Styling */
.feed-subscription-box {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border: 2px solid #dee2e6;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.feed-url-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.feed-url-container label {
  font-weight: 600;
  color: #495057;
  white-space: nowrap;
}

.feed-url-container input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  background: white;
  min-width: 300px;
}

.copy-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
  white-space: nowrap;
}

.copy-btn:hover {
  background: #0056b3;
}

.feed-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.feed-link, .subscribe-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.feed-link {
  background: #28a745;
  color: white;
}

.feed-link:hover {
  background: #1e7e34;
  color: white;
}

.subscribe-link.apple {
  background: #000;
  color: white;
}

.subscribe-link.apple:hover {
  background: #333;
  color: white;
}

.subscribe-link.spotify {
  background: #1db954;
  color: white;
}

.subscribe-link.spotify:hover {
  background: #1ed760;
  color: white;
}

.subscribe-link.youtube {
  background: #ff0000;
  color: white;
}

.subscribe-link.youtube:hover {
  background: #cc0000;
  color: white;
}

/* Downloads Grid */
.downloads-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.download-card {
  background: white;
  border: 2px solid #dee2e6;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.download-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.download-header h3 {
  margin: 0 0 0.5rem 0;
  color: #495057;
  font-size: 1.2rem;
}

.download-header p {
  margin: 0 0 1rem 0;
  color: #6c757d;
  font-style: italic;
}

.meeting-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.meeting-week, .meeting-chapters {
  background: #e9ecef;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #495057;
}

.download-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.download-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background: #f8f9fa;
}

.download-option.audio {
  border-left: 4px solid #28a745;
}

.download-option.video {
  border-left: 4px solid #dc3545;
}

.download-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.download-info i {
  font-size: 1.2rem;
  color: #495057;
}

.download-info span {
  font-weight: 500;
  color: #495057;
}

.download-info small {
  color: #6c757d;
}

.download-actions {
  display: flex;
  gap: 0.5rem;
}

.download-btn, .stream-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.download-btn {
  background: #007bff;
  color: white;
}

.download-btn:hover {
  background: #0056b3;
  color: white;
}

.stream-btn {
  background: #28a745;
  color: white;
}

.stream-btn:hover {
  background: #1e7e34;
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .downloads-grid {
    grid-template-columns: 1fr;
  }
  
  .download-option {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .download-actions {
    justify-content: center;
  }
  
  .feed-url-container {
    flex-direction: column;
    align-items: stretch;
  }
  
  .feed-url-container input {
    min-width: auto;
  }
  
  .feed-actions {
    justify-content: center;
  }
}

/* Copy to clipboard feedback */
.copy-btn.copied {
  background: #28a745;
}

.copy-btn.copied::after {
  content: " ✓";
}
</style>

<script>
function copyToClipboard(elementId) {
  const input = document.getElementById(elementId);
  const button = input.nextElementSibling;
  
  input.select();
  input.setSelectionRange(0, 99999); // For mobile devices
  
  try {
    document.execCommand('copy');
    button.classList.add('copied');
    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
    
    setTimeout(() => {
      button.classList.remove('copied');
      button.innerHTML = '<i class="fas fa-copy"></i> Copy';
    }, 2000);
  } catch (err) {
    console.error('Failed to copy: ', err);
    // Fallback for modern browsers
    navigator.clipboard.writeText(input.value).then(() => {
      button.classList.add('copied');
      button.innerHTML = '<i class="fas fa-check"></i> Copied!';
      
      setTimeout(() => {
        button.classList.remove('copied');
        button.innerHTML = '<i class="fas fa-copy"></i> Copy';
      }, 2000);
    });
  }
}
</script>
