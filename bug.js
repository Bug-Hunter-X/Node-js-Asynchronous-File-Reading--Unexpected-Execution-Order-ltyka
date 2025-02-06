```javascript
const fs = require('fs');

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read file:', err);
      return;
    }

    // Process the data here. For demonstration purposes, let's just log it.
    console.log('File data:', data);
  });
  console.log('File reading initiated'); // This line executes before the file is read
}

processFile('./my-file.txt');
```