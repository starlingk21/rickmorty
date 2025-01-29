<script setup lang="ts">
	import CharactersList from '@/components/list/CharactersList.vue'
</script>

<template>
	<div class="characters-container">
		<CharactersList />
	</div>
</template>

<style scoped lang="scss">
	.characters-container {
		max-width: 1440px;
		margin: 64px auto;
	}
</style>