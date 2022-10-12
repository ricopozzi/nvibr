interface AllBooksArrayProps {
    name: string;
    abbrev: string;
}
interface BookProps {
    abbrev: string;
    name: string;
    chapters: any[];
}
declare const findAllBooks: () => AllBooksArrayProps[];
declare const findBookByAbbrev: (abbrev: string) => BookProps;
declare const findBookByName: (name: string) => BookProps;
declare const findChapter: (bookName: string, chapter: number) => string[];
declare const findVerse: (bookName: string, chapter: number, verse: number) => string;
interface MethodsProps {
    findAllBooks: () => any;
    findBookByAbbrev: (abbrev: string) => any;
    findBookByName: (name: string) => any;
    findChapter: (bookName: string, chapter: number) => any;
    findVerse: (bookName: string, chapter: number, verse: number) => any;
}
declare const methods: MethodsProps;
export { findAllBooks, findBookByAbbrev, findBookByName, findChapter, findVerse };
export default methods;
