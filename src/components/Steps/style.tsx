import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: var(--background);
  padding: var(--medium);
`
export const H2 = styled.h2`
  width: 80%;
  background-color: var(--background);
  text-align: center;
  margin: 0 auto;
  font-size: var(--medium);
  font-weight: 100;
  padding: 1rem;
  &::selection{
      color: var(--white);
    }
`
export const StepsWrapper = styled.div`
  width: 80%;
  height: 40rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: var(--background);
  padding: var(--large);
`
export const Line = styled.span`
  margin: var(--minimal);
  border-left: solid 1px #222;
  padding-left: var(--small);
`
export const Icon = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Number = styled.p`
  font-size: var(--smallest);
  &::selection{
      color: var(--white);
    }
`
export const Title = styled.h2`
  font-size: var(--smallest);
  padding-top: var(--medium);
  margin-bottom: var(--minimal);
  &::selection{
      color: var(--white);
    }
`
export const Text = styled.p`
  font-size: 1.4rem;
  max-width: 90%;
  &::selection{
      color: var(--white);
    }
`
export const Link = styled.p`
width: 8.5rem;
  text-decoration: none;
  font-style: italic;
  font-weight: 600;
  cursor: pointer;
  border-bottom: 1px solid var(--black);
  color: var(--black);
  &:hover{
    color: var(--highlight);
    border-bottom: 1px solid transparent;
  }
  &::selection{
    background-color: var(--highliht);
    color: var(--black);
  }
`