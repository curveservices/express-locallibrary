const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

//Display all authors
exports.author_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author list");
});

// Display speecific authors
exports.author_details = asyncHandler(async (req, res, send) => {
    res.send(`NOT IMPLEMENTED: Author detail ${req.params.id}`);
});

//Display and create form on GET
exports.author_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author create GET");
});

// Handle Author create on POST.
exports.author_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author create POST");
});

// Display Author delete form on GET.
exports.author_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete GET");
});

// Handle Author delete on POST.
exports.author_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete POST");
});

// Display Author update form on GET.
exports.author_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update GET");
});

// Handle Author update on POST.
exports.author_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update POST");
});