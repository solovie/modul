import IArchers from '../interface/iarcher'
import ILeather from '../interface/ileather'
import { ArmourType } from './armours'
import Arrow from './arrow'

export default class Archers implements IArchers, ILeather {
	cost: number
	speed: number
	armour: ArmourType.LEATHER_ARMOUR
	arrows: Arrow[] = []

	constructor() {
		this.cost = 1
		this.speed = 7
		this.armour = ArmourType.LEATHER_ARMOUR
		for (let i = 0; i < 10; i++) {
			this.arrows.push(new Arrow())
		}
	}
}