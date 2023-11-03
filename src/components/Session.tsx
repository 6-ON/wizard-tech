import {  useParams } from 'react-router-dom'
import { getSession } from '../api'

const Session = () => {
	const { categoryId, sessionId } = useParams()
	const session = getSession({ catId: categoryId as string, ssid: sessionId as string })
	if (!session) {
		throw new Error(`Session not found for id ${sessionId}`)
	}
	return (
		<>
			<div className="flex flex-col gap-y-8">
				<h3 className="text-2xl">{session?.name}</h3>
				<p className="text-justify pe-52">{session?.desc}</p>
				<div>
					<h4 className="text-gray-600 text-xl ">{session?.speaker.name}</h4>
					<h6 className='font-extralight'>
						{session?.speaker.title} at {session?.speaker.org}{' '}
					</h6>
				</div>
				<p>{session?.speaker.bio}</p>
			</div>
		</>
	)
}

export default Session
