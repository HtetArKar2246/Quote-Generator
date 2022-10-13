const newQuote = document.getElementById("new-quote");
const quoteHTML = document.getElementById("quote");
const author = document.getElementById("author");
const quoteContainer = document.getElementById("quote-container");
const loader = document.querySelector(".loader");

const loading=()=>{
    loader.hidden = false;
    quoteContainer.hidden = true;
}

const dataShow=()=>{
    loader.hidden = true;
    quoteContainer.hidden = false;
}

let quotesData=[];
function randomQuotes (){
    loading();
    const quote = quotesData[Math.trunc(Math.random()*quotesData.length)];
   quoteHTML.textContent = quote.text;
   if(!quote.author) {
    author.textContent = "Anonymous";
   }else{
    author.textContent = quote.author;
   }
   if(quote.text.length > 50){
      quoteHTML.classList.add("long-quote");
   }else{
    quoteHTML.classList.remove("long-quote");
   }
   dataShow();
};

newQuote.addEventListener("click",randomQuotes);

async function quoteGenerator(){
    loading();
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        quotesData = await response.json();
        randomQuotes();
        
    } catch (error) {
        console.log(error);
        
    }
}
quoteGenerator();