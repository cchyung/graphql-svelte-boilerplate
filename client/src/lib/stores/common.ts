import { browser } from '$app/env'
import { readable } from 'svelte/store'
import axios from 'axios'

// Localstorage
export const getLocalStorage = (key) => {
	const json = browser ? localStorage.getItem(key) : null
	return json ? JSON.parse(json) : null
}

export const setLocalStorage = (key, value) => {
	if (browser) {
		if (!value) {
			localStorage.removeItem(key)
		} else {
			localStorage.setItem(key, JSON.stringify(value))
		}
	}
}

// Current time in UTC
export const now = readable(new Date(), (set) => {
	const interval = setInterval(() => {
		set(new Date())
	}, 1000)
	return () => clearInterval(interval)
})
