import styled from 'styled-components'
import tw from 'twin.macro'
// styled components with tailwindcss
const CatsContainer = styled.div`
    ${tw`mt-10 grid grid-cols-3  gap-x-10 gap-y-5 self-start whitespace-nowrap`}
`
export default CatsContainer