import Container from '../components/styled/Container'

const Home = () => {
	return (
		<>
			<Container>
					<img
						src="https://simplonline-v3-prod.s3.eu-west-3.amazonaws.com/media/image/jpg/img-main-653ee10fb7aba556407221.jpg"
						alt=""
						className='w-full'
					/>
					<h1>Welcome to Wizard-Tech</h1>
					<p className='mt-7'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum ratione reiciendis repellat expedita! Quae deleniti nam dolores, deserunt consequuntur at, labore ab maiores excepturi nihil aut, enim corrupti esse.
					</p>
			</Container>
		</>
	)
}

export default Home
