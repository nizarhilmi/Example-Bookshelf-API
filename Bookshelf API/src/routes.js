const {addbooks, getBooks, getBooksById, updateBook, deleteBook} = require('./handler') 

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addbooks,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getBooks,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBooksById,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBook,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBook,
    },
];

module.exports = routes;