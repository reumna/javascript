const quotes = [
    {
        quote:"You'll never find a rainbow if you're looking down",
        author: "Charile Chaplin",
    },{
        quote:"Change before you have to.",
        author: "Jack Welch",
    },{
        quote:"If you cna dream it, you can do it.",
        author: "Walt disney",
    },{
        quote:"Love the life you live. Live the life you love",
        author: "Bab Marley",
    },{
        quote:"It always seems impossible until it's done.",
        author: "Nelson Mandela",
    },{
        quote:"There is more to life than increasing its speed.",
        author: "Mahatma Gandhi",
    },{
        quote:"If you want to be happy,be.",
        author: "Leo Tolstoy",
    },{
        quote:"Indecision is often worse than wrong action.",
        author: "Henry Ford",
    },{
        quote:"Do one thing everyday that scares you.",
        author: "Eleanor Roosevelt",
    },{
        quote:"HE liked to like people, therefore people liked him",
        author: "Mark Twain",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;