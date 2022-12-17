const reverseInput = (input) => input.split('').reverse().join('');

process.stdin.on('data', data => {
  process.stdout.write(`${reverseInput(data.toString())}\n`);
});