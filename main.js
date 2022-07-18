const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.querySelector(".generate-button");


//the function who generate the quotes

function generate(){
    const quotes = {
        "- Nicholas Sparks":'“And when her lips met mine, I knew that I could live to be a hundred and visit every country in the world, but nothing would ever compare to that single moment when I first kissed the girl of my dreams and knew that my love would last forever.”',
        "- Aaron Lauritsen":'“There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.”',
        "- Daniel J. Boorstin":'“A best-seller was a book which somehow sold well because it was selling well.”',
        "- Dan Desmarques":'“He who loves truly will impose conditions: those necessary to allow love to expand and hate to fade.”'
    }

    const authors = Object.keys(quotes);
    const nameOfAuthor = authors[Math.floor(Math.random()*authors.length)];
    const quoteOfAuthor = quotes[nameOfAuthor];

    quote.innerHTML = quoteOfAuthor;
    author.innerHTML = nameOfAuthor;
}

//listen the click on button and call the generate function

button.addEventListener("click", generate);