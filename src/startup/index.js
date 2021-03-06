const express = require('express');

let _express = null;
let _config = null;

class Server {
  constructor({ config, router }) {
    _express = express().use(router);
    _config = config;
  }

  start() {
    return new Promise((resolve) => {
      _express.listen(_config.PORT, function () {
        console.log(
          `${_config.APPLICATION_NAME} API running on port ${_config.PORT}`
        );
        resolve();
      });
    });
  }
}

module.exports = Server;
