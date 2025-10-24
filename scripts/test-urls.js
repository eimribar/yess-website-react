const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

const CSV_PATH = path.join(__dirname, '../data/blog-posts.csv');

// Read and parse CSV
const fileContent = fs.readFileSync(CSV_PATH, 'utf-8');
const records = parse(fileContent, {
  columns: true,
  skip_empty_lines: true,
});

console.log('\n=== Blog URL Test Report ===\n');
console.log(`Total posts: ${records.length}\n`);

// Filter published posts
const publishedPosts = records.filter(record =>
  record['Archived']?.toLowerCase() !== 'true' &&
  record['Draft']?.toLowerCase() !== 'true'
);

console.log(`Published posts: ${publishedPosts.length}\n`);

// List all URLs
console.log('URLs to test:\n');
publishedPosts.forEach((record, index) => {
  const slug = record['Slug'] || '';
  const name = record['Name'] || '';
  console.log(`${index + 1}. http://localhost:3000/blog/${slug}`);
  console.log(`   Title: ${name}\n`);
});

// Group by category
const categories = {};
publishedPosts.forEach(record => {
  const category = record['Category'] || 'Uncategorized';
  if (!categories[category]) {
    categories[category] = [];
  }
  categories[category].push(record);
});

console.log('\n=== Posts by Category ===\n');
Object.entries(categories).forEach(([category, posts]) => {
  console.log(`${category}: ${posts.length} posts`);
});

console.log('\n=== Category Pages ===\n');
Object.keys(categories).forEach((category, index) => {
  const slug = category.toLowerCase().replace(/\s+/g, '-');
  console.log(`${index + 1}. http://localhost:3000/blog/category/${slug}`);
});

// List unique authors
const authors = {};
publishedPosts.forEach(record => {
  const author = record['Author'] || 'Unknown';
  if (!authors[author]) {
    authors[author] = 0;
  }
  authors[author]++;
});

console.log('\n=== Author Pages ===\n');
Object.entries(authors).forEach(([author, count], index) => {
  const slug = author.toLowerCase().replace(/\s+/g, '-');
  console.log(`${index + 1}. http://localhost:3000/blog/author/${slug} (${count} posts)`);
});

console.log('\n=== Test Complete ===\n');
console.log('✓ All URLs generated successfully');
console.log('✓ Open the URLs above in your browser to test');
console.log('\n');
