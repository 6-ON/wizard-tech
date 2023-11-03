import { createBrowserRouter, Form, RouteObject } from 'react-router-dom'

import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import DefaultLayout from '../layouts/DefaultLayout'
import About from '../pages/About'
import Categories from '../pages/Categories'
import ThankYou from '../pages/ThankYou'
import Sessions from '../components/Sessions'
import Session from '../components/Session'
import Register from '../pages/Register'

const routes: RouteObject[] = [
	{
		path: '/',
		Component: DefaultLayout,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				Component: Home,
			},
			{
				path: '/about',
				Component: About,
			},
			{
				path: '/categories',
				Component: Categories,

				children: [
					{
						
						path: ':categoryId',
						Component: Sessions,
						children: [{ path: ':sessionId', Component: Session }],
					},
				],
			},
			{
				path: '/register',
				Component: Register,
			},
			{
				
				path: '/thanks',
				Component: ThankYou,
			},
		],
	},
]

const router = createBrowserRouter(routes)

export default router
