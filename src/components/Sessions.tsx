import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { getCategory } from '../api'
import { CategoryT } from '../types'

const Sessions = () => {
	const { categoryId } = useParams()
	const category: CategoryT | undefined = getCategory(categoryId as string)
	if (!category) throw new Error(`No category found for id ${categoryId}`)

	return (
		<>
			<h3 className="text-3xl text-gray-500">{category?.name}</h3>
			<div className="flex flex-wrap gap-5 mt-5">
				{category?.sessions.map(({ id, name, desc, speaker }) => (
					<NavLink
						key={id}
						className={({ isActive }) =>
							[
								'text-center  py-6 px-10 border whitespace-nowrap',
								isActive ? 'border-blue-400 text-blue-400' : '',
							].join(' ')
						}
						to={id}
					>
						<h4>{name}</h4>
						<span className="font-thin">
							{speaker.name} | {speaker.org}
						</span>
					</NavLink>
				))}
			</div>
			<div className="mt-10">
				<Outlet />
			</div>
		</>
	)
}

export default Sessions
