import { parseFile } from 'music-metadata';
import { readdir } from 'fs/promises';
import { join } from 'path';

// Helper to format seconds to MM:SS
function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

async function getAllDurationsFromLocal() {
  const meetings = ['meeting-0', 'meeting-1', 'meeting-2', 'meeting-3', 'meeting-4'];

  for (const meeting of meetings) {
    const folder = `media/${meeting}`;
    console.log(`\n=== ${meeting.toUpperCase()} ===\n`);

    try {
      const files = await readdir(folder);
      const mediaFiles = files.filter(f => f.endsWith('.mp4') || f.endsWith('.m4a') || f.endsWith('.mp3'));

      for (const file of mediaFiles) {
        try {
          const metadata = await parseFile(join(folder, file));
          const duration = metadata.format.duration;
          console.log(`${file}: ${formatDuration(duration)}`);
        } catch (err) {
          console.log(`${file}: Error - ${err.message}`);
        }
      }
    } catch (err) {
      console.log(`Folder not found or empty`);
    }
  }
}

await getAllDurationsFromLocal();
