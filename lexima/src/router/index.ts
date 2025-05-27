import { createRouter, createWebHistory } from 'vue-router'
import JournalEntryView from '../views/JournalEntryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'journalEntry',
      component: JournalEntryView,
    },
  ],
})

export default router
