import styled from 'styled-components'
import media from 'styled-media-query'

export const LinkaniaWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  padding: 8rem;
  margin: var(--medium);
  ${media.lessThan('medium')`
    width: 100%;
    padding: var(--smallest);
    margin: 0 auto;
  `}
`
export const List = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--medium) var(--large) var(--small) var(--large);
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--black);
  background-color: rgba(139, 174, 99, 0.37);
  &:hover {
    opacity: 0.9;
  }
  ${media.lessThan('medium')`
    flex-direction: column;
    width: 100%;
    padding: var(--smallest) 0 var(--small) 0;
    
  `}
`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: var(--small) 0 var(--small) 0;
  ${media.lessThan('medium')`
  width: 90%;
    padding: var(--smallest);
    margin: 0 auto;
  `}
`
export const LinkA = styled.a`
  margin-top: var(--small);
  font-size: 1.5rem;
  width: 12.5%;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &:hover {
    opacity: 1;
    color: var(--black);
    border-bottom: 2px solid var(--black);
  }
  ${media.lessThan('medium')`
    width:30%;
  `}
`
export const Image = styled.img`
  ${media.lessThan('medium')`
    height: 20rem;
    width:95%;
    margin: 0 auto;
  `}
`
export const Name = styled.h1`
  font-weight: bold;
  font-size: var(--medium);
  padding: var(--small);
`
export const Body = styled.p`
  width: 100%;
  padding: var(--small);

  font-size: 20px;
  line-height: 1.7538461538;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  p {
    margin-bottom: var(--medium);
    font-size: var(--small);
  }
`

export const Title = styled.p`
  font-size: var(--small);
`

export const Description = styled.p`
  font-size: var(--smallest);
`
