const express = require('express');
const Provider = require('oidc-provider');
const {
  providerBaseUrl,
  providerConfig,
  clientId,
  responseType,
} = require('./config');
const port = '3005';
const app = express();
const oidc = new Provider(`${providerBaseUrl}:${port}`, providerConfig);
const server = oidc.listen(port, () => {
  console.log(
    `oidc-provider listening on port ${port}\n`,
    `> meta: ${providerBaseUrl}:${port}/.well-known/openid-configuration\n`,
    `> auth: ${providerBaseUrl}:${port}/auth?client_id=${clientId}&response_type=${encodeURIComponent(
      responseType,
    )}&scope=openid&nonce=xxx`,
  );
});
