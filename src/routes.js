const {
  addNoteHandler,
  getAllNotesHandler,
  editNotesByHandler,
  getNoteByIdHandler,
  deleteNotesByHandler,
} = require('./handler');

const routes = [
  // posting
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },

  // get all note
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },

  // get spesific note
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },

  // edite note
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotesByHandler,
  },

  // delete note
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNotesByHandler,
  },
];

module.exports = routes;