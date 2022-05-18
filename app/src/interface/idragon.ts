import Feed from '../class/feed'
import Girl from '../class/girl'
import ICommonProps from './icommonProps'

export default interface IDragon extends ICommonProps {
	feed: Feed
	girl: Girl
}