import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: var(--background);
`
export const H2 = styled.h2`
  width: 80%;
  background-color: var(--background);
  text-align: center;
  margin: 0 auto;
  font-size: var(--medium);
  font-weight: 100;
  padding: 1rem;
`
export const StepsWrapper = styled.div`
  width: 80%;
  height: 40rem;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background-color: var(--background);
  padding: 4rem;
`
export const Line = styled.span`
  margin: 0.5rem 0 0.5rem 0;
  border-left: solid 1px #222;
  padding-left: 2rem;
`
export const Icon = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem 0 0.5rem;
`
export const TextArea = styled.div`
  max-width: 25%;
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
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
export const Text = styled.p`
  font-size: 1.3rem;
  max-width: 80%;
`
