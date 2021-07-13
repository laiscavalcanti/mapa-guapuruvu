import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  padding: 8rem;
`
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 75%;
  background-color: rgba(139, 174, 99, 0.37);
  padding: 4rem 8rem 4rem 8rem;
`
export const Heading = styled.h1`
  font-size: var(--medium);
  margin-bottom: var(--medium);
  text-align: center;
  font-weight: bold;
`

export const Body = styled.div`
  margin-bottom: var(--large);
  font-size: var(--small);

  p {
    margin-bottom: var(--medium);
    font-size: var(--small);
  }
`