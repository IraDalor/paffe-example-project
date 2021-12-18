<template>
    <q-card class="full-width quote-card">
        <q-card-section>
            <div class="content">{{ content }}</div>
            <div class="author">- {{ author }}</div>
        </q-card-section>

        <q-space></q-space>
        <q-separator inset />

        <q-card-actions class="bottom-row">
            <q-rating :model-value="modelValue" @update:model-value="$emit('update:model-value', $event)" :max="5" size="32px" />
            <q-btn class="new-quote-btn" unelevated color="primary" label="Get New Quote" @click="$emit('getRandomQuote')" />
        </q-card-actions>
    </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'QuoteCard',
  emits: ['update:model-value', 'getRandomQuote'],
  props: {
      modelValue: {
          type: Number,
          required: true,
      },
      content: {
          type: String,
          required: true,
      },
      author: {
          type: String,
          require: true,
      }
  },
})
</script>

<style scoped lang="scss">
    .quote-card {
        text-align: center;
        min-height: 400px;
        color: #3b3b3b;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .content {
            margin: 2rem 1rem 0 1rem;
            font-size: 24px;
        }
        .author {
            margin: 2rem 1rem 0 1rem;
            font-size: 18px;
        }

        .bottom-row {
            display: flex;
            flex-direction: column;
            align-items: center;

            .rating {
                margin: 1rem auto 0 auto;
            }

            .new-quote-btn {
                margin: 1.5rem 0 1rem 0;
                width: 35%;
            }
        }
    }
</style>
