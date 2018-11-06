// output a prompt
const done = output => {
  process.stdout.write(output);
  process.stdout.write('\nprompt>');
};
process.stdout.write('prompt>');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    const pwd = require('./pwd');
    pwd(done);
  } else if (cmd === 'ls') {
    const ls = require('./ls');
    ls(done);
  } else if (cmd.startsWith('cat')) {
    const cat = require('./cat');
    const fileName = cmd.split(' ')[1];
    cat(done, fileName);
  } else if (cmd.startsWith('curl')) {
    const curl = require('./curl');
    const url = cmd.split(' ')[1];
    curl(done, url);
  }
});
