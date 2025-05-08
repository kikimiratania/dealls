const fs = require('fs');
const path = require('path');

const screenshotsDir = path.join(__dirname, 'cypress', 'screenshots');
const videosDir = path.join(__dirname, 'cypress', 'videos');
const reportsDir = path.join(__dirname, 'cypress', 'bug-reports');

if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

const getFiles = (dir, ext) =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir).filter(file => file.endsWith(ext))
    : [];

const screenshots = getFiles(screenshotsDir, '.png');
const videos = getFiles(videosDir, '.mp4');

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const reportFile = path.join(reportsDir, `bug-report-${timestamp}.md`);

let content = `# 🐞 Bug Report\n\n`;

content += `## 🖼 Screenshots:\n`;
screenshots.forEach(file => {
  content += `- ![${file}](../screenshots/${file})\n`;
});

content += `\n## 🎥 Videos:\n`;
videos.forEach(file => {
  content += `- [${file}](../videos/${file})\n`;
});

content += `
## 📋 Notes:
Please fill in the following manually:
- 📍 Steps to reproduce
- ✅ Expected Result
- ❌ Actual Result
`;

fs.writeFileSync(reportFile, content, 'utf-8');
console.log(`✅ Bug report generated: ${reportFile}`);
