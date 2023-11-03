import React from 'react'
import Container from '../components/styled/Container'
import { getCategories } from '../api'
import { NavLink, Outlet } from 'react-router-dom'
import Heading from '../components/styled/Heading'
import CatsContainer from '../components/styled/CatsContainer'

const Categories = () => {
	const cats = getCategories()
	return (
		<>
			<Container>
				<Heading>Sessions Categories</Heading>
				<CatsContainer>
					{cats.map(({id,name})=>(
						<NavLink className={({isActive})=>[
							isActive?'bg-gray-500 text-white':'',
						].join(" ")} key={id} to={id}>{name}</NavLink>
					))}
				</CatsContainer>
				<div className='mt-10 self-start'>
					<Outlet/>
				</div>
			</Container>
		</>
	)
}

export default Categories
