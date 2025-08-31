# Media Assets Directory

This directory contains video and podcast assets for the Accelerate DevEx Book Club meetings.

## Current Assets

### Meeting 1 - Laying the Foundation
- ✅ `meeting-1-video.mp4` - Complete video content
- ✅ `meeting-1-podcast.m4a` - Complete podcast content

### Meeting 2 - Technical Excellence & Continuous Delivery  
- ✅ `meeting-2-video.mp4` - Complete video content
- ✅ `meeting-2-podcast.m4a` - Complete podcast content

### Meeting 3 - Management & Sustainability
- ✅ `meeting-3-video.mp4` - Complete video content  
- ✅ `meeting-3-podcast.m4a` - Complete podcast content

### Meeting 4 - Leadership & Transformation
- 📝 `meeting-4-video.mp4` - **Placeholder file** (needs generation)
- 📝 `meeting-4-podcast.m4a` - **Placeholder file** (needs generation)

## Generating Missing Content

To generate the missing Meeting 4 media content:

### 1. Video Content
Use the prompt in [`/resources/meetings/meeting-4/video-prompt.md`](../../../resources/meetings/meeting-4/video-prompt.md) with NotebookLM or similar AI tools.

### 2. Podcast Content  
Use the prompt in [`/resources/meetings/meeting-4/podcast-prompt.md`](../../../resources/meetings/meeting-4/podcast-prompt.md) with NotebookLM or similar AI tools.

### 3. General Guidelines
Refer to [`/resources/plan/audio.md`](../../../resources/plan/audio.md) and [`/resources/plan/video.md`](../../../resources/plan/video.md) for comprehensive content generation guidelines.

## File Naming Convention

All media files follow the pattern:
- Videos: `meeting-{N}-video.mp4`
- Podcasts: `meeting-{N}-podcast.m4a`

Where `{N}` is the meeting number (1-4).

## Usage in Meeting Files

Media files are referenced in meeting markdown files using Jekyll's baseurl:

```html
<!-- Video -->
<video controls width="100%">
    <source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-{N}-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<!-- Podcast -->
<audio controls>
    <source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-{N}-podcast.m4a" type="audio/x-m4a">
    Your browser does not support the audio element.
</audio>
```

## Technical Notes

- All media assets are served directly through GitHub Pages
- Video files use MP4 format for broad browser compatibility
- Audio files use M4A format for optimal quality and compatibility
- Placeholder files contain instructions for content generation