import { NavLink } from 'react-router-dom'
import StyledHeader from './styled/StyledHeader'
import { navLinks } from '../config'


const Header = () => {
	return (
		<StyledHeader>
			<ul>
				{navLinks.map(({ path, content }) => (
					<li key={path}>
						<NavLink className={({ isActive }) => (isActive ? 'underline text-blue-400' : '')} to={path}>
							{content}
						</NavLink>
					</li>
				))}
			</ul>
		</StyledHeader>
	)
}

export default Header
