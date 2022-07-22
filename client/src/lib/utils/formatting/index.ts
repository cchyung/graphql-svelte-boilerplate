import DOMPurify from 'dompurify'
import { marked } from 'marked'
import linkifyHtml from 'linkify-html'
import 'linkify-plugin-mention'
import 'linkify-plugin-hashtag'
import _ from '$utils/koopdash'

const linkifyOptions = {
	defaultProtocol: 'https',
	className: 'text-blue-500',
	formatHref: {
		mention: (username) => `https://twitter.com/${username}`,
		hashtag: (hashtag) => `https://twitter.com/hashtag/${hashtag.substr(1)}`
	},
	target: '_blank'
}

export const formatAddress = (address: string) => {
	if (!address) return ''
	return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
}

export const formatTime = (start: Date, end: Date, shorten = false) => {
	const remainingTime = _.timeDifference(start, end)
	if (remainingTime.days > 0) {
		const label = remainingTime.days === 1 ? 'day' : 'days'
		return `${remainingTime.days} ${label}`
	}
	if (remainingTime.hours > 0) {
		const label = remainingTime.hours === 1 ? 'hour' : 'hours'
		return `${remainingTime.hours} ${label}`
	}
	if (remainingTime.minutes > 0) {
		let label = shorten ? 'min' : 'minute'
		if (remainingTime.minutes > 1) label = `${label}s`
		return `${remainingTime.minutes} ${label}`
	}
	if (remainingTime.seconds > 0) {
		let label = shorten ? 's' : ' second'
		if (remainingTime.minutes > 1 && !shorten) label = `${label}s`
		return `${remainingTime.seconds}${label}`
	}
	return null
}

export const formatHtmlText = (text: string) => {
	if (!text) return
	const formattedMarkdown = formatMarkdownText(text, false)
	const formattedLinkify = formatLinkifyText(formattedMarkdown, false)
	return DOMPurify.sanitize(formattedLinkify)
}

export const formatMarkdownText = (text: string, sanitize = true) => {
	const html = marked(text)
	return sanitize ? DOMPurify.sanitize(html) : html
}

export const formatLinkifyText = (text: string, sanitize = true) => {
	const html = linkifyHtml(text, linkifyOptions)
	return sanitize ? DOMPurify.sanitize(html) : html
}

export const parseSocial = (platform: 'twitter' | 'telegram', text: string) => {
	switch (platform) {
		case 'twitter': {
			if (text.includes('twitter.com')) return text

			return 'https://twitter.com/' + text.replace('@', '')
		}
		case 'telegram': {
			if (text.includes('t.me')) return text

			return 'https://t.me/' + text.replace('@', '')
		}
	}
}

export const formatInputDate = (date: string | Date) => {
	return new Date(date).toISOString()
}

