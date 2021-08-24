import styled from 'styled-components'

export const LinkaniaWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 60%;
  padding: 8rem;
  margin: var(--medium);
`

export const List = styled.li`
  display: flex;
  margin: var(--small);
  padding: var(--small);
  border-bottom: 1px solid var(--black);
  background-color: var(--background);
  &:hover {
    background-color: rgba(139, 174, 99, 0.77);
  }
`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--small);
`
export const LinkA = styled.a`
  font-size: 1.1rem;
  cursor: pointer;
`
export const Image = styled.img``

export const Title = styled.p`
  font-size: var(--small);
`

export const Description = styled.p`
  font-size: var(--smallest);
`
