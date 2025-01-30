import axios, { type AxiosResponse } from 'axios'
import { ref } from 'vue'
import type { Character, CharacterInfo } from '@/types.ts'

export function useCharacters() {
	const isLoading = ref<boolean>(false)
	const charactersList = ref<Character[]>([])
	const singleCharacter = ref<Character>()
	const apiInfo = ref<CharacterInfo>()
	
	const getCharacters = async (url: string) => {
		isLoading.value = true
		
		const req = await axios.get(url)
			.then((response: AxiosResponse<any>) => {
				if (response.data.results) {
					charactersList.value.push(...response.data.results)
				} else {
					singleCharacter.value = response.data
				}
				
				apiInfo.value = response.data.info
				
				isLoading.value = false
			})
			.catch((error) => {
				console.log(error.statusText)
				isLoading.value = false
			})
	}
	
	return {
		getCharacters,
		isLoading,
		charactersList,
		singleCharacter,
		apiInfo,
	}
}