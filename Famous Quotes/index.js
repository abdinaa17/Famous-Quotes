const quote = document.querySelector('.quote');
const authorName = document.querySelector('.author');
const btn = document.querySelector('.btn');

getQuote();

btn.addEventListener('click', getQuote);


async function getQuote() {
    const response = await fetch('http://quotable.io/random');
    const data = await response.json();
    quote.innerHTML = `"${data.content}"`;
    authorName.innerHTML = `Author: ${data.author}`;
}