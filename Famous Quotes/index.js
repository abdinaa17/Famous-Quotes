const quote = document.querySelector('.quote');
const authorName = document.querySelector('.author');
const btn = document.querySelector('.btn');

getQuote();

btn.addEventListener('click', getQuote);


async function getQuote() {
    const response = await fetch('http://quotable.io/random');
    const quote = await response.json();
    quote.innerHTML = `"${quote.content}"`;
    authorName.innerHTML = `Author: ${quote.author}`;
}
