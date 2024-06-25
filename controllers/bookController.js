const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    req.send("NOT IMPLEMENTED: Site Home Page")
})

exports.book_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: book list");
});

exports.book_detail = asyncHandler(async (req, res, send) => {
    res.send(`NOT IMPLEMENTED: book detail ${req.params.id}`);
});

exports.book_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: book create GET");
});

exports.book_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: book create POST");
});

exports.book_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: book delete GET");
});

exports.book_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: book delete POST");
});

exports.book_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: book update GET");
});

exports.book_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: book update POST");
});