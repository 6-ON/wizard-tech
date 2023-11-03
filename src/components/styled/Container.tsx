import styled from 'styled-components'
import tw from 'twin.macro'
// styled components with tailwindcss
const Container = styled.div`
    ${tw`mt-16 flex flex-col items-center mx-72 `}

    h1 {
        ${tw`text-2xl mt-3 self-start`}
    }
`
export default Container