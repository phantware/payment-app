const passport = require('passport');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL:
        'https://phantware-payment-app.herokuapp.com/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Check if user exist.
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          //User already exist
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
