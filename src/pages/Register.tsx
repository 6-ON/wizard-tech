import { useEffect, useRef } from 'react'
import Container from '../components/styled/Container'
import { useNavigate } from 'react-router-dom'
import Input from '../components/styled/input'

const Register = () => {
	const emailEl = useRef<HTMLInputElement|null>(null)
    useEffect(() => {
        emailEl.current?.focus()
    }, [])
    const navigate = useNavigate()
    const handleSubmit = ()=>{
        navigate('/thanks', { state: { email: emailEl.current?.value },replace:true })
    }
	return (
		<>
			<Container>
				<h2 className="text-5xl font-semibold self-start mt-6">Register for Wizard Tech</h2>
				<p className="mt-16">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto asperiores atque
					autem cumque dolorum eaque earum eligendi enim error, esse et eum exercitationem facilis fugiat
					fugit hic id illo illum ipsa iure laboriosam laborum magnam molestiae natus necessitatibus.
				</p>
				<div>
					<form onSubmit={handleSubmit} className='flex flex-col gap-y-4 mt-20'>
                        <label>Email : </label>
						<Input  type="email" ref={emailEl}/>
						<button className='px-56 py-4 bg-blue-500 hover:bg-blue-700 text-white' type="submit">register</button>
					</form>
				</div>
			</Container>
		</>
	)
}
export default Register
