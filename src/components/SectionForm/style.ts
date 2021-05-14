import styled from 'styled-components'

export const SectionFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 4rem;
  background-color: #e4d901;
`
export const Text1 = styled.p`
  font: 2rem 'Cabin', sans-serif;
  color: var(--black);
  padding: 2rem;
  letter-spacing: 3px;
`

export const Text2 = styled.p`
  font: 4rem 'Cabin', sans-serif;
  color: var(--black);
  padding: 2rem 6rem 2rem 6rem;
  &::before {
    content: '';
    background-color: lightgreen;
    width: 80px;
    height: 15px;

    border: 1px solid black;
  }
`
  export const Text3 = styled.p`
    font: 3rem 'Cairo', sans-serif;
    padding: 2rem 6rem 2rem 8rem;
  `

