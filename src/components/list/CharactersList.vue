<script setup lang="ts">
	import { onBeforeUnmount, onMounted, ref } from 'vue'
	import CharacterItem from '@/components/list/CharacterItem.vue'
	import { useCharacters } from '@/composables/useCharacters.ts'
	import CharacterCard from '@/components/view/CharacterCard.vue'
	import type { Character } from '@/types.ts'
	
	const { getCharacters, charactersList, isLoading, apiInfo } = useCharacters()
	
	const RICK_MORTY_API = 'https://rickandmortyapi.com/api/character'
	
	const singleCharacterData = ref<Character>()
	const showCard = ref<boolean>(false)
	
	const loadCharacter = (res) => {
		singleCharacterData.value = res.data
		
		showCard.value = true
	}
	
	const handleScroll = () => {
		const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
		const scrolledFromTop = window.scrollY
		
		if (scrollableHeight - scrolledFromTop < 100 && !isLoading.value) {
			getCharacters(apiInfo.value?.next || '')
		}
	}
	
	onMounted(() => {
		getCharacters(RICK_MORTY_API)
		
		window.addEventListener('scroll', handleScroll)
	})
	
	onBeforeUnmount(() => {
		window.removeEventListener('scroll', handleScroll)
	})
</script>

<template>
	<CharacterCard :character-data="singleCharacterData"
	               v-if="showCard"
	               @close-view="showCard = false" />
	
	<div v-show="!showCard" class="characters-list" role="list">
		<CharacterItem
			v-for="character in charactersList"
			:key="character.id"
			:id="character.id"
			:image="character.image"
			:gender="character.gender"
			:name="character.name"
			:status="character.status"
			:species="character.species"
			@load-character="loadCharacter" />
		
		<div v-if="isLoading" role="presentation">loader</div>
	</div>
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
	}
</style>
