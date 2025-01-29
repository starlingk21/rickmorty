/**
 * Was meant to create solution with vue-router,
 * but after our call, we decided to stick to the props version.
 * This would be the starting point if the solution would be fully created with vue-router.
 */

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	
	routes: [
		{
			path: '/',
			name: 'index',
			component: () => import('@/views/Index.vue'),
		},
		{
			path: '/character/:id',
			name: 'character-info',
			component: () => import('@/components/view/CharacterCard.vue')
		}
	],
})

export default router