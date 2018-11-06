const req = require('request');

module.exports = (done, url) => {
  req(url, (err, response, body) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(`statusCode: ${response && response.statusCode}`);
      done(`body ${body}`);
    }
  });
};
