import confetti from 'canvas-confetti'

export const showConfetti = () => {
	confetti({
		particleCount: 200,
		angle: -90,
		decay: 0.9,
		gravity: 0.25,
		spread: 180,
		ticks: 500,
		origin: {
			x: 0.5, // center
			y: 0 // top
		}
	})
}
