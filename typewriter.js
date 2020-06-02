// animate a sentence, revealing one character at a time with a 50ms delay:

const sentence = "hello there from lighthouse labs";

const typewriter = function() {
  
  let delay = 0;
  
  for (const char of sentence) {
    delay += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, delay + 50);
  
};

typewriter();