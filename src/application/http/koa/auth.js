var passport = require('koa-passport');
var knex = require('./db/connection');
passport.serializeUser(function (user, done) { done(null, user.id); });
passport.deserializeUser(function (id, done) {
    return knex('users').where({ id: id }).first()
        .then(function (user) { done(null, user); })
        .catch(function (err) { done(err, null); });
});
