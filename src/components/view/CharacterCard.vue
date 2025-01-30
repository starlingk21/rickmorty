<script setup lang="ts">
	import type { Character } from '@/types.ts'
	import { computed, type PropType } from 'vue'
	import { format } from 'date-fns'
	
	const props = defineProps({
		characterData: {
			type: Object as PropType<Character>,
			required: true,
			default: () => {}
		}
	})
	
	const formattedDate  = computed(() => format(props.characterData.created, 'yyyy-MM-dd'))
	
	const emit = defineEmits(['closeView'])
	
	const closeView = () => {
		emit('closeView')
	}
</script>

<template>
	<div class="character-view-container" role="presentation">
		<div class="character-image" role="presentation">
			<img :src="characterData.image" :alt="characterData.name">
		</div>
		
		<div class="character-information" role="presentation">
			<h3 class="name">{{ characterData.name }}</h3>
			
			<div class="details" role="presentation">
				<span role="presentation">Character Id: </span>{{ characterData.id }}
			</div>
			<div class="details" role="presentation">
				<span role="presentation">Species: </span>{{ characterData.species }}
			</div>
			<div class="details" role="presentation">
				<span role="presentation">Status: </span>{{ characterData.status }}
			</div>
			<div class="details" role="presentation">
				<span role="presentation">Gender: </span>{{ characterData.gender }}
			</div>
			<div class="details" role="presentation">
				<span role="presentation">Origin: </span>{{ characterData.origin.name }}
			</div>
			<div class="details" role="presentation">
				<span role="presentation">Location: </span>{{ characterData.location.name }}
			</div>
			<div class="details" role="presentation">
				<span role="presentation">Created Date: </span>{{ formattedDate }}
			</div>
		</div>
	</div>
	
	<div class="actions">
		<button class="btn" @click="closeView">Back</button>
	</div>
</template>

<style scoped lang="scss">
	.character-view-container {
		display: flex;
		gap: 24px;
		margin-bottom: 24px;
		
		.character-image {
			img {
				max-width: 400px;
			}
		}
		
		.name {
			margin-top: 0;
			font-weight: 600;
			font-size: 20px;
			line-height: 26px;
		}
		
		.details {
			font-size: 14px;
			line-height: 18px;
			font-weight: 300;
			color: #282828;
			margin-bottom: 8px;
			
			span {
				color: #757575;
			}
		}
	}
	
	.actions .btn {
		padding: 0;
		border: none;
		background-color: #fff;
		
		font-size: 20px;
		font-weight: 600;
		line-height: 26px;
		text-decoration: underline;
		
		cursor: pointer;
	}
</style>