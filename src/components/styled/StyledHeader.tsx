import styled from 'styled-components'
import tw from 'twin.macro'
// styled components with tailwindcss
const StyledHeader = styled.header`
	${tw`text-red-700 px-12 mt-4`}
	ul {
		${tw`flex justify-end gap-6`}
	}
`
export default StyledHeader
