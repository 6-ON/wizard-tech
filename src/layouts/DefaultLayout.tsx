import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const DefaultLayout = () => {
	return (
		<>
			<div className="min-h-screen flex flex-col">
				<Header />
				<div className="content">
					<Outlet />
				</div>
				<div className="mt-auto">
					<Footer />
				</div>
				
			</div>
		</>
	)
}

export default DefaultLayout
