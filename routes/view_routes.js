const router = require('express').Router();
const { Note } = require('../models/Note');

// Post route to retrieve the form data
router.post('/notes', (clientReq, serverRes) => {

  const newNote = new Note(clientReq.body.note);

  newNote.save();

  // Respond back to the client to complete the request
  serverRes.redirect('/');
});

module.exports = router;