"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findVerse = exports.findChapter = exports.findBookByName = exports.findBookByAbbrev = exports.findAllBooks = void 0;
var nvi_json_1 = __importDefault(require("../../nvi.json"));
var findAllBooks = function () {
    var bookNames = [];
    var books = nvi_json_1.default.forEach(function (book) {
        bookNames.push({
            name: book.name,
            abbrev: book.abbrev
        });
    });
    return bookNames;
};
exports.findAllBooks = findAllBooks;
var findBookByAbbrev = function (abbrev) {
    var book = nvi_json_1.default.filter(function (book) { return book.abbrev === abbrev; });
    if (book[0] === undefined) {
        throw new Error("Book not found");
    }
    return book[0];
};
exports.findBookByAbbrev = findBookByAbbrev;
var findBookByName = function (name) {
    var book = nvi_json_1.default.filter(function (book) { return book.name === name; });
    if (book[0] === undefined) {
        throw new Error("Book not found");
    }
    return book[0];
};
exports.findBookByName = findBookByName;
var findChapter = function (bookName, chapter) {
    var chapterArray = [];
    var bookChapter = nvi_json_1.default.filter(function (book, index) {
        if (book.name === bookName) {
            return chapterArray = book.chapters[chapter - 1];
        }
    });
    if (chapterArray[0] === undefined) {
        throw new Error("Chapter not found");
    }
    return chapterArray;
};
exports.findChapter = findChapter;
var findVerse = function (bookName, chapter, verse) {
    var chapterArray = findChapter(bookName, chapter);
    if (chapterArray[verse - 1] === undefined) {
        throw new Error("Verse not found");
    }
    return chapterArray[verse - 1];
};
exports.findVerse = findVerse;
var methods = {
    findAllBooks: findAllBooks,
    findBookByAbbrev: findBookByAbbrev,
    findBookByName: findBookByName,
    findChapter: findChapter,
    findVerse: findVerse
};
exports.default = methods;
