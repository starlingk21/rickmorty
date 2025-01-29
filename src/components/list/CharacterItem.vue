<script setup lang="ts">
	import { useCharacters } from '@/composables/useCharacters.ts'
	import { computed, watch } from 'vue'
	
	const props = defineProps({
		id: {
			type: Number,
			required: true,
			default: undefined
		},
		image: {
			type: String,
			required: true,
			default: null
		},
		name: {
			type: String,
			required: true,
			default: null
		},
		status: {
			type: String,
			required: true,
			default: null
		},
		species: {
			type: String,
			required: true,
			default: null
		},
		gender: {
			type: String,
			required: true,
			default: null
		}
	})
	
	const { getCharacters, charactersList } = useCharacters()
	
	const characterData = computed(() => charactersList.value)
	
	const CHARACTER_API = `https://rickandmortyapi.com/api/character/${props.id}`
	
	const emit = defineEmits(['loadCharacter'])
	
	const getCharacterData = () => {
		if (CHARACTER_API.length && props.id) {
			getCharacters(CHARACTER_API)
		}
	}
	
	watch(characterData, (data) => {
		emit("loadCharacter", { data })
	})
</script>

<template>
	<div class="list-item" role="listitem" @click="getCharacterData">
		<img class="list-item-image" :src="image" alt="character-image">
		
		<span class="name" role="presentation">{{ name }}</span>
		<span class="info" role="presentation">Status: {{ status }}</span>
		<span class="info" role="presentation">Species: {{ species }}</span>
		<span class="info" role="presentation">Gender: {{ gender }}</span>
	</div>
</template>

<style scoped lang="scss">
	.list-item {
		cursor: pointer;
		
		a {
			text-decoration: none;
			display: block;
		}
		
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
</style>