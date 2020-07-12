// This is the production mode

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongooseURI: process.env.MONGODB_URI,
  cookieKey: process.env.COOKIE_KEY,
};
