import { ErrorResponse, Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
	const error = useRouteError() as Error | ErrorResponse
	return (
		<div className="text-center p-20">
			<h1 className="text-6xl mb-5">Oops!</h1>
			<div className='mb-10'>
				{isRouteErrorResponse(error) ? (
					<p>
						<i className="text-red-500 text-3xl">{error.statusText}</i>
					</p>
				) : (
					<p>
						<h1 className="text-3xl text-red-500">{error.message}</h1>
					</p>
				)}
			</div>
			Go back to the
			<Link className="text-blue-600" to="/">
				{' '}
				home page
			</Link>
		</div>
	)
}
