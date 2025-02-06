```javascript
const fs = require('fs');

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read file:', err);
      return;
    }

    // Process the data here. 
    console.log('File data:', data); 
  });
}

processFile('./my-file.txt');
```