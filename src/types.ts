export type CharacterInfo = {
	count: number
	pages: number | null
	next: string | null
	prev: string | null
}

export type CharacterLocation = {
	name: string
	url?: string | null
}

export type CharacterOrigin = {
	name: string
	url?: string | null
}

export interface Character {
	created: string
	episode: string[]
	gender: string
	id: number
	image: string
	location: CharacterLocation
	name: string
	origin: CharacterOrigin
	species: string
	status: string
	type?: string | null | undefined
	url: string | null
}





