import IDragon from '../interface/idragon'
import Feed from './feed'
import Girl from './girl'

export default class Dragons implements IDragon {
	cost: number
	speed: number
	feed: Feed
	girl: Girl

	constructor() {
		this.cost = 0
		this.speed = 60
		this.feed = new Feed()
		this.girl = new Girl()
	}
}