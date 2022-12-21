const reverseInput = (input) => input.split('').reverse().join('');

const handleSignal = (signal) => {
  process.stdout.write(`${signal} signal received.\n`);
  process.exit();
};

process.stdin.on('data', data => {
  process.stdout.write(`${reverseInput(data.toString())}\n`);
});

process.on('exit', code => {
  process.stdout.write(`Exiting with code ${code}\n`);
  process.stdout.write('Bye bye!\n');
});

process.on('SIGINT', handleSignal);
process.on('SIGTERM', handleSignal);
process.on('SIGQUIT', handleSignal);
