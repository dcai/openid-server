const express = require('express');
const Provider = require('oidc-provider');
const providerConfig = require('./config');
const port = '3005';
const app = express();
const oidc = new Provider(`http://localhost:${port}`, providerConfig);
const server = oidc.listen(port, () => {
  console.log(
    `oidc-provider listening on port ${port}, check http://localhost:${port}/.well-known/openid-configuration`,
  );
});
