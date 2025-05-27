<template>
  <div class="min-h-screen bg-[#fdf6e3] flex items-center justify-center p-8">
    <div class="bg-white w-full max-w-2xl p-6 rounded-2xl shadow-lg border border-[#e2d5c1] relative font-serif">
      <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-[#f5deb3] via-[#fdf6e3] to-[#f5deb3] rounded-t-2xl"></div>
      <div class="prose prose-lg text-gray-800 whitespace-pre-wrap">
        <h1 class="text-3xl font-bold mb-2">📔 Journal Entry</h1>
        <p class="italic text-sm text-gray-500 mb-4">{{ currentDate }}</p>
        <textarea v-model="entry" class="w-full h-96 bg-transparent resize-none focus:outline-none" placeholder="Write your thoughts here..."></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const entry = ref('')
const currentDate = new Date().toLocaleDateString(undefined, {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
})
</script>

<style scoped>
textarea {
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.6;
  padding: 1rem;
  border: none;
  background-color: #fdf6e3;
  box-shadow: inset 0 0 5px rgba(0,0,0,0.05);
}
</style>