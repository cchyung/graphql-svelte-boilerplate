module.exports = {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Light
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				inverse: 'var(--color-inverse)',
				'primary-focus': 'var(--color-primary-focus)',
				'secondary-focus': 'var(--color-secondary-focus)',
				'inverse-focus': 'var(--color-inverse-focus)',
				// Status
				'success-primary': 'var(--color-success-primary)',
				'success-secondary': 'var(--color-success-secondary)',
				'info-primary': 'var(--color-info-primary)',
				'info-secondary': 'var(--color-info-secondary)',
				'warning-primary': 'var(--color-warning-primary)',
				'warning-secondary': 'var(--color-warning-secondary)',
				'error-primary': 'var(--color-error-primary)',
				'error-secondary': 'var(--color-error-secondary)',
				// Background
				'background-primary': 'var(--color-background-primary)',
				'background-secondary': 'var(--color-background-secondary)',
				'background-primary-dark': 'var(--color-background-primary-dark)',
				'background-secondary-dark': 'var(--color-background-secondary-dark)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--color-gradient-primary)',
				'gradient-secondary': 'var(--color-gradient-secondary)',
				'gradient-primary-rotated': 'var(--color-gradient-primary-rotated)',
				'gradient-secondary-rotated': 'var(--color-gradient-secondary-rotated)',
				'conic-gradient-primary': 'var(--color-conic-gradient-primary)',
				'conic-gradient-secondary': 'var(--color-conic-gradient-secondary)',
				'background-primary': 'var(--color-background-primary)',
				'background-secondary': 'var(--color-background-secondary)',
				'background-primary-dark': 'var(--color-background-primary-dark)',
				'background-secondary-dark': 'var(--color-background-secondary-dark)'
			},
			boxShadow: {
				glow: '0 0 10px 1px var(--color-inverse-translucent)',
				'glow-primary': '0 0 10px 1px var(--color-primary-translucent)',
				'glow-secondary': '0 0 10px 1px var(--color-secondary-translucent)',
				'glow-dark': '0 0 10px 1px var(--color-inverse-translucent-dark)'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite'
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')]
}
