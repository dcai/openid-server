const port = '3005';
const clientCallbackUrl = 'https://westpac-sso-app/callback';
const clientId = 'westpac-sso-app';

const express = require('express');
const Provider = require('oidc-provider');

const app = express();

const providerConfig = {
  cookies: {
    keys: ['a', 'b'],
  },
  clients: [
    {
      client_id: clientId,
      grant_types: ['implicit'],
      response_types: ['id_token'],
      redirect_uris: [clientCallbackUrl],
      token_endpoint_auth_method: 'none',
    },
  ],
  claims: {
    email: ['email', 'email_verified'],
    phone: ['phone_number', 'phone_number_verified'],
    profile: [
      'birthdate',
      'family_name',
      'gender',
      'given_name',
      'locale',
      'middle_name',
      'name',
      'nickname',
      'picture',
      'preferred_username',
      'profile',
      'updated_at',
      'website',
      'zoneinfo',
    ],
  },
  features: {
    clientCredentials: true,
    introspection: true,
    sessionManagement: true,
  },
};

const oidc = new Provider(`http://localhost:${port}`, providerConfig);
const server = oidc.listen(port, () => {
  console.log(
    `oidc-provider listening on port ${port}, check http://localhost:${port}/.well-known/openid-configuration`,
  );
});
