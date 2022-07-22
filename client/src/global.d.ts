/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace svelte.JSX {}

// Interfaces
interface ImportMetaEnv {
	readonly PROD: boolean
	readonly VITE_SERVER_URL?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

interface Window {
	ethereum: any
}

declare module '*.svelte' {
	const content: any
	export default content
}

// Image imports
declare module '*.svg' {
	const value: string
	export default value
}

declare module '*.png' {
	const value: string
	export default value
}

declare module '*.jpg' {
	const value: string
	export default value
}

declare module '*.jpeg' {
	const value: string
	export default value
}

declare module '*.gif' {
	const value: string
	export default value
}
