import bible from "../../nvi.json"

interface AllBooksArrayProps {
    name: string;
    abbrev: string;
}

interface BookProps {
    abbrev: string;
    name: string;
    chapters: any[]
}


const findAllBooks = () => {
    const bookNames: AllBooksArrayProps[] = []

    const books = bible.forEach((book: any) => {
        bookNames.push({
            name: book.name,
            abbrev: book.abbrev
            
        })
    })

    return bookNames

}

const findBookByAbbrev = (abbrev: string) => {
    
    const book: BookProps[] = bible.filter((book: any) => book.abbrev === abbrev)

    if(book[0] === undefined){
        throw new Error("Book not found")
    }

    return book[0]

}

const findBookByName = (name: string) => {

    const book: BookProps[] = bible.filter((book: any) =>  book.name === name)

    if(book[0] === undefined){
        throw new Error("Book not found")
    }

    return book[0]

}

const findChapter = (bookName: string, chapter: number) => {

    let chapterArray: string[] = []

    const bookChapter = bible.filter( (book: any, index: number) => {
        if(book.name === bookName) {
            return chapterArray = book.chapters[chapter - 1]
        }
    })

    if(chapterArray[0] === undefined){
        throw new Error("Chapter not found")
    }

    return chapterArray
}

const findVerse = (bookName: string, chapter: number, verse: number ) => {

    const chapterArray: string[] = findChapter(bookName, chapter)

    if(chapterArray[verse - 1] === undefined){
        throw new Error("Verse not found")
    }

    return chapterArray[verse - 1]
}

interface MethodsProps {
    findAllBooks: () => any;
    findBookByAbbrev: (abbrev: string) => any;
    findBookByName: (name: string) => any;
    findChapter: (bookName: string, chapter: number) => any;
    findVerse: (bookName: string, chapter: number, verse: number) => any;
}

const methods: MethodsProps = {
    findAllBooks,
    findBookByAbbrev,
    findBookByName,
    findChapter,
    findVerse
}

export { 
    findAllBooks,
    findBookByAbbrev,
    findBookByName,
    findChapter,
    findVerse
 }
export default methods