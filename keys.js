// JavaScript
console.log('this is loaded');

var twitterKeys = {
  consumer_key: '22kSubZFkgLY4NeFPbYRt1B4Q',
  consumer_secret: 'QxpY8FSW9DL6uiREC93cx9fbzZXD0Sc7ZqBsJKQP2SsxnO94Qs',
  access_token_key: '920510054482305024-CDP3fKh1RILiU8D0iitas3Ao3FkwJD5',
  access_token_secret: 'T3Y8uCAUV2HDjC8djqyhk3E37ilRfcJoyFApgm0FEcV8Q',
}

var spotifyKeys = {
        clientId: 'cb2d0e1ebce24aca865b42d94ce0eb8b',
        clientSecret: 'fc0399dbc94141b0b93c95b37f3b3183',
        redirectUri : 'http://localhost:8888/callback/'
};

module.exports = {
    twitterKeys,
    spotifyKeys
};