const clientCallbackUrl = 'https://westpac-sso-app/callback';
const clientId = 'westpac-sso-app';
const clients = [
  {
    client_id: clientId,
    grant_types: ['implicit'],
    response_types: ['id_token'],
    redirect_uris: [clientCallbackUrl],
    token_endpoint_auth_method: 'none',
  },
];

const jwks = {
  keys: [
    {
      e: 'AQAB',
      n:
        '0sjvg0seJrGeN-GAnUP7SwsHHtCECKcJhtlXKl0fPJRL9N8uaqoTBwSowUtFALrOJSYXsHBFmzNt2MBbPQRbH2Z5RhQbV1eURj_zPZ9Ry7ojEyWOTAmO4OwaPORo4jTgrrv8Ux8iPa3HFH1jogcUdck87xg5D7Z8aN2SkgTaXrP-kmnBf9tOSJ32AGs8DB3fAk_aCjC6J9bS6wZ7pNZW-II9Z-7bK3HG0MFd85YRi_lQHp4MKlZiUJ1dDIe3QKmQBrUr8UNxhaU_zNdPp4YKxN4tm6QKms2McgwFH4Mb-aO0B5ackn4A0orh-GVcVSWUzbzOyxn3UGmYLWrF139r_Q',
      d:
        'x9Vf3SV2LFDwIyJTAMXWk8qcsYYV5u4Vhha_IJawaopdiIWeR9l9uIWeR8LIZGy1y1pV0xxdoUoctgWHek2K5jYMe3fMg_2vwPoX7TACKBcL8bcFNOlK38p3BYu2M97VtFLcYSF_IOKDftVxg8caiqCCeFqKnm7ve6u0rWKUdHqP1xXjBALrXuoA6wk-Sc1NRAokUdqgbL3SQdkpvEMoJH8zoZl0mJ0Vnjf8j204If-DgOGkDyrXmlEWcwBZpB4SMVf9-pUjLOHZrB1hPuBmVeDTY_436g417wQeARpKyWbbt7swB-9tJkCvpSzqZ_VLVUn6R4_IQpvr17IY4sB3MQ',
      p:
        '8s0tOX0h31iBsDF-frj3GNCFzGJuexvztYcpKrLQLYt2jcV1dOZI7M_-qBcvLFCCriwIrQfejx1cSaVLoheP4zOLqh8ZyFo1PSuyGmdeOUmaVsMjQDyCZuW_hBn2em9eCY6aho9yq3cMsJgau-NMJvrz-KIlF4_IT_5fPcVEcl8',
      q:
        '3j43doQ1OZkE2pQP413yv1U1n6T2GkvbeMMpCCSNH5aUoGLrOZkXMPF-Fp-hBqBHhgsm6Wx482Y-Yt_dR_QEG76iXYkbHgdGHxWJ0bQ9v-MIeCRss1OjVjYk3OYA30u8fVY7D57wz5tZcuWnXgXElVnKs2DvI61tyPwT4pCq1yM',
      dp:
        'cOlDh8GOV_wjy1ko9ytzFaIbJrH7qNqV2iwx0752G0gI6OMTvTo-XYpYZbjqYhRKwU6O9lB7ilhgC4uIAagtbL4SzBlMdySkL387gxXg9oko8gIrSXsaNVnQV1Fvkv5pX85mQ_8_l0d0qkcB37BTQKlhfZWB5FQkFjc3-VTcgMc',
      dq:
        'vvXGwlcnRK5utUGzxTHcevrEcMBVlpLHqiRHBXAispm4a3eTlpIskyltphLTUdY2nr7GWJuT8dBQmrSwdjr9rLlI2gYM_uhRIDRpj37H8DEr_c-OdyfOmS08z3HyHev9sdR-OxXe5QQe_9LE1M0v9QSKX0dTM9y5EJFIpMyZfvE',
      qi:
        'yyLjvFieG7cR73i810nv1MF3CPiWnGfIDeUQmjXF3VtLhb3thzEwSRafAFdw1UbpME8ArYpPoaZ-9mIrhIu-sY_9w6MlXg78PGiLVt4w_HAKH4d4iU6Yc5g2t9EboFNTV5kdknyPd3Nv-ZPMVCziR9qw9qFhA6YKMLc9Ix8oyVk',
      kty: 'RSA',
      kid: 'piTLijCMAEfeVtK0HXTHWU377XpkYLvmZZZoO7kgP5c',
      alg: 'RS256',
      use: 'sig',
    },
  ],
};
module.exports = {
  clients,
  jwks,
  cookies: {
    keys: ['a', 'b'],
  },
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
    devInteractions: {
      enabled: true,
    },
    sessionManagement: true,
  },
};
