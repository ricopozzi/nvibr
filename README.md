<meta lang="pt-BR">
<p align="center" style="font-size:32px;">NVIBR</p>



<p>Essa é uma biblioteca tipada ( Typescript ) facilita o acesso à bíblia em seus apps Javascript/Typescript</p>

## Instalando

`npm install nvibr` <span style="margin: 0 10px 0" >ou</span> `yarn add nvibr`

## Start

```js
import methods from "nvibr"
```
 ## Como usar

 ```js
 const allBooks = methods.findAllBooks()
 ```

<div style="margin-top:30px" ></div>

`findAllbooks()` - Retorna uma lista com todos os livros e abreviacoes da bíblia.

`findBookByAbbrev(abbrev: string)` - Recebe como argumento a abreviacao e retorna o livro correspondente.

`findBookByName(name: string)` - Recebe como argumento o nome do livro e retorna o livro correspondente.

`findChapter(bookName: string, chapter: number)` - Recebe como argumento o nome do livro e o número do capítulo e retorna o capítulo.

`findVerse(bookName: string, chapter: number, verse: number)` - Recebe como argumento o nome do livro, o número do capítulo e o número do verso e retorna o verso.

## God bless you all
