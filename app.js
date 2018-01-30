const port = '9090';
const clientCallbackUrl = 'https://westpac-sso-app/callback';
const clientId = 'westpac-sso-app';


const express = require('express');
const Provider = require('oidc-provider');

const app = express();

const clients = [{
    client_id: clientId,
    grant_types: ['implicit'],
    response_types: ['id_token'],
    redirect_uris: [clientCallbackUrl],
    token_endpoint_auth_method: 'none'
}];


const providerConfig = {
    claims: {
        email: ['email', 'email_verified'],
        phone: ['phone_number', 'phone_number_verified'],
        profile: ['birthdate', 'family_name', 'gender', 'given_name', 'locale', 'middle_name', 'name', 'nickname', 'picture', 'preferred_username', 'profile', 'updated_at', 'website', 'zoneinfo']
    },
    features: {
        clientCredentials: true,
        introspection: true,
        sessionManagement: true
    }
};

const oidc = new Provider(`http://localhost:${port}`, providerConfig);
oidc.initialize({clients}).then(function () {
    app.use('/', oidc.callback);
    app.listen(port);

});
