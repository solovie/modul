import ICommonProps from '../interface/icommonProps'
import IHeavy from '../interface/iheavy'
import { ArmourType } from './armours'

export default class Reiters implements IHeavy, ICommonProps {
	cost: number
	speed: number
	armour: ArmourType.HEAVY_ARMOUR

	constructor() {
		this.cost = 2
		this.speed = 5
		this.armour = ArmourType.HEAVY_ARMOUR
	}
}