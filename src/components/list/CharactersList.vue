<script setup lang="ts">
	import axios from 'axios'
	import { onMounted, ref } from 'vue'
	import type { Character, CharacterInfo } from '@/types.ts'
	
	const RICK_MORTY_API = 'https://rickandmortyapi.com/api/character'
	
	const apiInfo = ref<CharacterInfo>()
	const charactersList = ref<Character[]>([])
	
	const getCharacters = (url: string) => {
		axios.get(url)
			.then((response) => {
				console.log(response)
				charactersList.value = response.data.results
				apiInfo.value = response.data.info
			})
			.catch((error) => { console.log(error.statusText) })
	}
	
	onMounted(() => {
		getCharacters(RICK_MORTY_API)
	})
</script>

<template>
	<ul class="characters-list">
		<li class="list-item" v-for="character in charactersList" :key="character.id">
			<img class="list-item-image" :src="character.image" alt="character-image">
			
			<span class="name" role="presentation">{{ character.name }}</span>
			<span class="info" role="presentation">Status: {{ character.status }}</span>
			<span class="info" role="presentation">Species: {{ character.species }}</span>
			<span class="info" role="presentation">Gender: {{ character.gender }}</span>
		</li>
	</ul>
</template>

<style scoped lang="scss">
	.characters-list {
		display: grid;
		grid-template-columns: repeat(5, 220px);
		gap: 24px 16px;
		justify-content: center;
		
		list-style-type: none;
		padding: 0;
		margin: 0;
		
		.list-item {
			cursor: pointer;
			
			.list-item-image {
				border-top-right-radius: 8px;
				border-top-left-radius: 8px;
				width: 100%;
			}
			
			span {
				display: block;
			}
			
			.name {
				line-height: 26px;
				font-weight: 600;
				font-size: 20px;
				color: #282828;
				margin-bottom: 8px;
			}
			
			.info {
				font-weight: 300;
				font-size: 14px;
				line-height: 18px;
				color: #757575;
				margin-bottom: 4px; // Wasn't specified in designs, but felt that I had to add it so that the design matches with the actual result.
			}
		}
	}
</style>