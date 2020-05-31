const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signUp, login } = require('./handlers/users');

const firebase = require('firebase');
const config = require('./util/config');

// Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);

// Users routes
app.post('/signup', signUp);
app.post('/login', login);

exports.api = functions.https.onRequest(app);
