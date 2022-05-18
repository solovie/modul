import Unit from '../class/Unit'

interface ResultProps {
	quantity: number
}

const ResultContent: React.FC<ResultProps> = ({ quantity }) => {
	const unit = new Unit(quantity)
	return (<div style={{ fontSize: '20px' }}>{unit.show()}</div>)
}

export default ResultContent