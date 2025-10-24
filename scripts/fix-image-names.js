const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../public/blog-images');

// Get all files in the directory
const files = fs.readdirSync(imageDir);

files.forEach(file => {
  // Decode the URL-encoded filename
  const decodedName = decodeURIComponent(file);

  // Only rename if the decoded name is different
  if (decodedName !== file) {
    const oldPath = path.join(imageDir, file);
    const newPath = path.join(imageDir, decodedName);

    try {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} -> ${decodedName}`);
    } catch (error) {
      console.error(`Error renaming ${file}:`, error.message);
    }
  }
});

console.log('Image filename fix complete!');
