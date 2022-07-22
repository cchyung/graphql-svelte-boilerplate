import { toast } from '@zerodevx/svelte-toast'

type ToastLevel = 'info' | 'success' | 'error' | 'warning'

const levelColor = (level: ToastLevel) => {
	switch (level) {
		case 'info':
			return 'gray'
		case 'success':
			return 'green'
		case 'error':
			return 'red'
		case 'warning':
			return 'orange'
	}
}

export const showToast = ({
	level,
	title,
	message
}: {
	level: ToastLevel
	title?: string
	message?: string
}) => {
	toast.push({
		msg: `<strong>${title ?? ''}</strong>${title ? '<br>' : ''}
            ${message ?? ''}`,
		theme: {
			'--toastWidth': '320px',
			'--toastBorderRadius': '6px',
			'--toastPadding': '8px',
			'--toastBarBackground': '#ddd',
			'--toastBackground': levelColor(level)
		},
		duration: 4000
	})
}
