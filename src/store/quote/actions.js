import { quote } from "shell-quote";
import { api } from "src/boot/axios";
const Sentiment = require('sentiment');

const getRandom = async () => {
    const quote = await api.get('/random');
    const {content} = quote.data;
    const sentiment = new Sentiment();
    quote.data.sentiment = sentiment.analyze(content).score;
    return quote.data;
};

const getQuotes = async ( {commit, state}) => {
    const quotes = await api.get(`/quotes?page=${state.currentPage}`);
    if (quotes.data.totalPages <= state.currentPage) {
        commit('setCurrentPage', 1);
    }
    commit('setQuotes', quotes.data.results);
};

export default {
    getRandom,
    getQuotes
};