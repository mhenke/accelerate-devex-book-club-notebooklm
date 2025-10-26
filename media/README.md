# Media Files Structure

This folder contains all audio and video files used in the book club meetings.

## Folder Structure

All media files are organized by meeting number in the following structure:

```
media/
├── meeting-0/
│   ├── accelerate-mastery-deep-dive.m4a (11:38) - Main podcast
│   └── meeting-0-video.mp4 (4:51) - Main video
├── meeting-1/
│   ├── meeting-1-podcast.m4a (Main podcast - full book overview)
│   ├── meeting-1-video.mp4 (Main video)
│   ├── The_Accelerate_Blueprint.mp4 (7:33)
│   ├── accelerate-success-deep-dive.mp4 (30:38)
│   ├── accelerate-devex-critique.mp4 (10:34)
│   ├── accelerate-metrics-unlocked.mp4 (1:35)
│   ├── the-explainer-unpacking-accelerate.mp4 (5:48)
│   ├── Accelerate_Under_the_Microscope__Critiquing_DORA_Metrics,_Surve.m4a (10:19)
│   └── Accelerate_s_Data_Secrets__The_4_DORA_Metrics_That_Kill_the_Spe.m4a (1:31)
├── meeting-2/
│   ├── meeting-2-podcast.m4a (54:26) - Main podcast
│   └── meeting-2-video.mp4 (6:55) - Main video
├── meeting-3/
│   ├── meeting-3-podcast.m4a (46:23) - Main podcast
│   └── meeting-3-video.mp4 (6:35) - Main video
└── meeting-4/
    ├── meeting-4-podcast.m4a (34:17) - Main podcast
    └── meeting-4-video.mp4 (6:31) - Main video
```

## S3 Bucket Mirror

This local structure mirrors the S3 bucket structure at:
`s3://accelerate-devex-book-club-notebooklm/`

All files in this folder should be kept in sync with the S3 bucket.

## File Naming Convention

- Main podcasts: `meeting-N-podcast.m4a`
- Main videos: `meeting-N-video.mp4`
- Alternative content: descriptive names (e.g., `accelerate-success-deep-dive.mp4`)

## Durations

Durations are extracted using `extract-durations.js` at the project root.

To update durations:
```bash
node extract-durations.js
```
