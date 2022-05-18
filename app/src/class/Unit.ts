import Archers from './archers'
import Dragons from './dragons'
import Reiters from './reiters'

export default class Unit {
	private reiters: Reiters[] = []
	private dragons: Dragons[] = []
	private archers: Archers[] = []

	constructor(quantity: number) {
		this.createUnit(quantity)
	}

	private createUnit(quantity: number) {
		for (let i = 0; i < quantity; i++) {
			this.reiters.push(new Reiters())
			this.dragons.push(new Dragons())
			this.archers.push(new Archers())
		}
	}

	private calculate() {
		let cost, speed, girls, feed, arrows
		cost = speed = girls = feed = arrows = 0
		for (let e of this.reiters) {
			cost += e.cost
			speed += e.speed
		}
		for (let e of this.dragons) {
			cost += e.cost
			speed += e.speed
			girls += 1
			feed += 1
		}
		for (let e of this.archers) {
			cost += e.cost
			speed += e.speed
			arrows += e.arrows.length
		}
		return { cost, speed, girls, feed, arrows }
	}

	public show() {
		const { cost, speed, girls, feed, arrows } = this.calculate()
		return `Ціна війська: ${cost}   Швидкість війська: ${speed}   
				Кількість дівчат: ${girls}   Кількість корму: ${feed}   Кількість стріл: ${arrows}`
	}
}