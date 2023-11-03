import { useLocation } from 'react-router-dom'
import Container from '../components/styled/Container'
import Heading from '../components/styled/Heading'

const ThankYou = () => {
	const {
		state: { email },
	} = useLocation()
	return (
		<>
			<Container>
				<Heading>Thank you</Heading>
				<p>You're now registerd</p>
				<p>
					We've sent an email to
					<strong>{email}</strong>
				</p>
			</Container>
		</>
	)
}
export default ThankYou
