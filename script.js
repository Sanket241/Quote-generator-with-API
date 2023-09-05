const quotetext=document.getElementById("quote");
const quoteauthor=document.getElementById("aurhor");
const newQuoteBuuton=document.getElementById("new-quote");
const tweetQuotebutton=document.getElementById("tweet-quote");

//array of codes
const quotes=[
    {
    text:"The only way to do great work is to love what you do",
    author:"Steve jobs"
    },
    {
        text:"I have not failed.I've just found 10,000 ways that won't work",
        author:"Thomas Edition"
    },
    {
        text:"It does not matter how you slowly you go as long as you do not stop.",
        author:"Con???"
    },
    {
        text:"you miss 100% of the shots you don't take.",
        author:"Wanye Gretzky"
    },
    {
        text:"Success is not final, failure is not total: it is the courage to continue that counts.",
        author:"Winston Churchill"
    },
    {
        text:"It is never too late to be what you might have been.",
        author:"George Eliot"
    },
    {
        text:"To live is the rarest thing in the world. Most people exist, that is all.",
        author:"Oscar Wilde"
    },
    {
        text:"Be kind, for everyone you meet is fighting a hard battle.",
        author:"Plato"
    },
    {
        text:"Life is tough my darling, but so are you",
        author:"Stephanie Bennett Henry"
    },
    {
        text:"Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
        author:"Stephen King"
    },
    {
        text:"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
        author:" William Faulkner"
    },
    {
        text:"Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.",
        author:"John Green"
    },
    {
        text:"The Six Golden Rules of Writing: Read, read, read, and write, write, write.",
        author:"Ernest Gaines"
    },
    {
        text:"Focus more on your desire than on your doubt, and the dream will take care of itself.",
        author:"Mark Twain"
    },
    {
        text:"I hope that in this year to come, you make mistakes. Because if you are making mistakes, then you are making new things, trying new things, learning, living, pushing yourself, changing yourself, changing your world. You're doing things you've never done before, and more importantly, you're doing something.",
        author:"Neil Gaiman"
    },
    {
        text:"Maybe it's not about having a beautiful day, but about finding beautiful moments. Maybe a whole day is just too much to ask. I could choose to believe that in every day, in all things, no matter how dark and ugly, there are shards of beauty if I look for them.",
        author:"Anna White"
    },
    {
        text:"Trust our heart if the seas catch fire, live by love though the stars walk backwards.",
        author:"E. E. Cummings"
    },
    {
        text:"I want to taste and glory in each day, and never be afraid to experience pain.",
        author:"Sylvia Plath"
    },
    {
    text:"That's one small step for a man, a giant leap for mankind.",
    author:"Neil Armstrong"
    },
    
];
// generate the random quotes
function getRandomQuote(){
    return quotes[Math.floor(Math.random()*quotes.length)]
}
    function displayQuotes(){
        const{text, author} = getRandomQuote();
        quotetext.textContent = text;
        quoteauthor.textContent=author;
    }

    //tweet the current quote
    function tweetQuote(){
        const tweettext=`${quotetext.textContent}-${quoteauthor.textContent}`
        const tweetUrl=`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(tweetUrl);
    }
    //eventlistenrs

    newQuoteBuuton.addEventListener("click",displayQuotes);
    tweetQuotebutton.addEventListener("click",tweetQuote);

    //initial display

    displayQuotes();