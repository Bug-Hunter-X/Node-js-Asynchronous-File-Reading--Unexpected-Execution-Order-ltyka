# Node.js Asynchronous File Reading: Unexpected Execution Order

This repository demonstrates a common error in Node.js when dealing with asynchronous file reading using `fs.readFile`.  The problem arises from the asynchronous nature of `fs.readFile`. The callback function within `fs.readFile` executes only after the file reading is complete, but other lines of code continue to execute immediately after the `fs.readFile` call. This can lead to unexpected behavior if you expect the file data to be immediately available after calling `fs.readFile`.

## Bug

The `bug.js` file demonstrates this issue. The console message 'File reading initiated' is printed before the file's content ('File data:'). This is because the file reading is an asynchronous operation, meaning it happens in the background without blocking the main thread.