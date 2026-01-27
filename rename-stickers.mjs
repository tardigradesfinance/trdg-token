import fs from 'fs';
import path from 'path';

const directory = 'public/images/stickers';

fs.readdirSync(directory).forEach(file => {
    const oldPath = path.join(directory, file);
    const newPath = path.join(directory, file.toLowerCase().replace(/\s+/g, '-'));

    if (oldPath !== newPath) {
        console.log(`Renaming: ${file} -> ${path.basename(newPath)}`);
        // Rename to temp first to avoid case-only issues on Windows
        const tempPath = oldPath + '.tmp';
        fs.renameSync(oldPath, tempPath);
        fs.renameSync(tempPath, newPath);
    }
});
