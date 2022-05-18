import ReactDOM from 'react-dom'
import ResultContent from './ResultContent'

export const RenderComponent = () => {
	const unitQuantity = parseInt((document.getElementById('quantity') as HTMLInputElement).value)
	ReactDOM.render(<ResultContent quantity={unitQuantity} />,
		document.getElementById('content'))
}