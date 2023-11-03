import { categories } from './api'
type FindSessionT = {
	catId: string
	ssid: string
}
export const getCategories = () => categories.map(({ name, id }) => ({ id, name }))
export const getCategory = (categoryId: string) => categories.find(({ id }) => id === categoryId)
export const getSession = ({ catId, ssid }: FindSessionT) =>
	categories.find(({ id }) => id === catId)?.sessions.find(({ id }) => ssid === id)
