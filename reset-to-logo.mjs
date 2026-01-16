import fs from 'fs';
import path from 'path';

const LOGO_PATH = '/images/trdg-logo.png';
const rootDir = process.cwd();
const validExtensions = ['.tsx', '.ts', '.css'];

// Recursive walker
function walk(dir, results = []) {
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('.next')) {
                walk(file, results);
            }
        } else {
            if (validExtensions.includes(path.extname(file))) {
                results.push(file);
            }
        }
    });
    return results;
}

const allFiles = walk(rootDir);

allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Regex to match our MISSING_ pattern inside quotes
    // Matches: "/images/MISSING_anything"
    const regex = /\/images\/MISSING_[^"']+/g;

    if (regex.test(content)) {
        console.log(`Fixing: ${path.relative(rootDir, file)}`);
        content = content.replace(regex, LOGO_PATH);
        fs.writeFileSync(file, content);
    }
});
