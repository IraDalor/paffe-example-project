const Sentiment = require('sentiment');

const setQuotes =  (state, quotes) => {
    quotes.forEach((quote) => {
        const sentiment = new Sentiment();
        const {content} = quote;
        quote.sentiment = sentiment.analyze(content).score;
    });
    state.quotes = quotes;
};

const setCurrentPage = (state, value) => {
    state.currentPage = value;
}

const removeQuote = (state, quote) => {
    state.quotes = state.quotes.filter((el) => el.content != quote.content);
}

export default {
    setQuotes,
    setCurrentPage,
    removeQuote
};
