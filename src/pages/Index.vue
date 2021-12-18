<template>
  <q-page class="flex flex-center main-page">
    <quote-card
      class="card"
      :content="quote.content" 
      :author="quote.author" 
      @getRandomQuote="getRandomQuote" 
      :modelValue="rating" 
      @update:model-value="setRating" 
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import QuoteCard from '../components/QuoteCard.vue';
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default defineComponent({
  components: { QuoteCard },
  name: 'PageIndex',
  data() {
    return {
      rating: 0,
      quote: {},
    };
  },
  async created() {
    try {
      this.quote = await this.getRandom();
      await this.getQuotes();
    } catch(e) {
      console.log(e);
      this.sendError();
    }
  },
  computed: {
    ...mapGetters('quote', ['quotes', 'currentPage']),
  },
  methods: {
    ...mapActions('quote', ['getQuotes', 'getRandom']),
    ...mapMutations('quote', ['setCurrentPage', 'removeQuote']),
    async getRandomQuote() {
      this.rating = 0;
      this.quote = await this.getRandom();
    },
    async setRating(newRating) {
      this.rating = newRating;
      try {
        if (newRating > 3) {
          const newQuote = this.quotes.find((quote) => Math.abs(quote.sentiment - this.quote.sentiment) < 2);
          if (!newQuote) {
            this.setCurrentPage(this.currentPage + 1);
            await this.getQuotes();
            this.setRating(newRating);
          } else {
            this.quote = newQuote;
            this.removeQuote(newQuote);
          }
        } else {
          this.quote = await this.getRandom();
        }
      } catch(e) {
        console.log(e);
        this.sendError();
      }
      this.rating = 0;
    },
    sendError() {
      this.$q.notify({
        message: 'There as a problem getting a new quote, please try again'
      })
    }
  }
})
</script>

<style lang="scss" scoped>
  .main-page {
    background-color :#e8e8e8;

    .card {
      width: 100%;
      max-width: 600px;
    }
  }
</style>
