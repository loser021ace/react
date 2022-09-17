var stack = (new Error()).stack;

var console = {
  log: function(text) {
    global.console.log(`${__filename}: ` + text);
  }
};

console.log("test");
console.log(stack);
console.log("test");
