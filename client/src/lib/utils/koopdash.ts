// like lodash, but koopdash!
export default {
	// _.get
	get: (obj: any, path: string, defValue: any = undefined) => {
		if (!path) return undefined
		const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)
		const result = pathArray.reduce((prevObj, key) => prevObj && prevObj[key], obj)
		return result === undefined ? defValue : result
	},
	// title case
	titleCase: (s: string) => {
		if (!s) return ''
		return s.charAt(0).toUpperCase() + s.slice(1)
	},
	startCase: (s: string) => {
		if (!s) return ''
		return s.replace(/([a-z])([A-Z])/g, '$1 $2')
	},
	timeDifference: (start: Date, end: Date) => {
		if (!(start && end) || start > end) {
			return {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			}
		}

		let diff = Math.abs(end.getTime() - start.getTime()) / 1000

		const secondsPerDay = 60 * 60 * 24
		const days = Math.floor(diff / secondsPerDay)
		diff -= days * secondsPerDay

		const secondsPerHour = 60 * 60
		const hours = Math.floor(diff / secondsPerHour) % 24
		diff -= hours * secondsPerHour

		const secondsPerMinute = 60
		const minutes = Math.floor(diff / secondsPerMinute) % 60
		diff -= minutes * secondsPerMinute

		const seconds = Math.floor(diff % 60)

		return { days, hours, minutes, seconds }
	},
	uniqBy: (arr, predicate) => {
		const cb = typeof predicate === 'function' ? predicate : (o) => o[predicate]

		return [
			...arr
				.reduce((map, item) => {
					const key = item === null || item === undefined ? item : cb(item)
					map.has(key) || map.set(key, item)
					return map
				}, new Map())
				.values()
		]
	},
	difference: (arr, values) => {
		return arr.filter((v) => !values.includes(v))
	},
	range: (num) => {
		return Array.from({ length: num }, (v, k) => k)
	}
}
