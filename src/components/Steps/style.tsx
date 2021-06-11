import styled from 'styled-components'

export const StepsWrapper = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  background-color: var(--background);
  padding: 4rem;
  border: 1px solid white;
`
export const Line = styled.span`
  margin: .5rem 0 .5rem 0;
  border-left: solid 1px #222;
  padding-left: 2rem;
`
export const Icon = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 .5rem 0 .5rem;
`
export const TextArea = styled.div`
  max-width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Number = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`
export const Title = styled.h2`
  font-size: var(--small);
  margin-bottom: 1rem;
`
export const Text = styled.p`
  font-size: var(--smallest);
  max-width: 80%;
`
