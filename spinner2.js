const chars = ['|', '/', '-', '\\'];
let delay = 100;
// refactoring of spinner1.js
// similar to hello_timeout.js
const spinner = () => {
  for (const char of characters) {
    // interating through array
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    // write char after delay
    delay += 200; 
    // add 200 to delay, then loop back
  }
  // new line logic after complete
  setTimeout(() => {
    console.log("\n");
  }, delay);
};