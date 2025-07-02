const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const Users = require('../models/users');

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
        },
        async (username, password, done) => {
            const q = await User.findOne({ email: username }).exec();
            if (!q) {
                return done(null, false, {
                    message: "Incorrect credentials.",
                });
            }
            if (!q.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect credentials.",
                });
            }
            return done(null, q);
        }
    )
);

 