const router = require('express').Router();
const { getNotes } = require('../models/Note');

router.get('/notes', (clientReq, serverRes) => {
  const notes = getNotes();

  serverRes.send(notes);
});


module.exports = router;