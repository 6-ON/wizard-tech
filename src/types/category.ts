type SpeakerT = {
	name: string
	title: string
	org: string
	bio: string
}
export type SessionT = {
	name: string
	id: string
	desc: string
	speaker: SpeakerT
}
export type CategoryT = {
	name: string
	id: string
	sessions: SessionT[]
}
