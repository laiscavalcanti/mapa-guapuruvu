import styled from 'styled-components'
import media from 'styled-media-query'

export const SectionInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: auto;
  margin: 0 auto;
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
   position: static;
   width: 100%;
   flex-direction: column;
  `}
`
export const ContainerCarousel = styled.div`
  width: 60%;
  height: 40rem;

  ${media.lessThan('medium')`
   width: 95%;
   height: 25rem;
   margin: 0 auto;
   padding-bottom: var(--medium); 
     `}
`

export const Subtitle = styled.p`
  font-size: 1.3rem;
`
export const ContainerText = styled.div`
  width: 70%;
  height: 42rem;
  padding: 3rem 3rem 3rem 3rem;
  margin-left: 4rem;
  background-color: var(--white);
  bottom: 8px;
  border: 2px solid var(--background);
  border-radius: 5px;
  box-shadow: 4px -1px 15px 7px rgba(0, 0, 0, 0.1);
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
   height: 45rem;
   padding: var(--minimal);
   width: 90%;
   position: static;
   margin: var(--small) auto;
  `}
`
export const ReadMore = styled.a`
  align-self: flex-start;
  margin: 0 0rem 0 2rem;
  background-color: var(--highlight);
  padding: var(--smallest) var(--small) var(--smallest) var(--small);
  border-radius: 15px;
  text-decoration: none;
  font-size: var(--smallest);
  color: var(--black);
  border-bottom: 1px solid transparent;
  cursor: pointer;
`
export const Title = styled.p`
  font-size: var(--medium);
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--black);
  margin: 10rem 0 var(--large) 0;
  &::selection {
    color: var(--background);
    margin: var(--minimal);
  }
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    font-size: var(--smallest);
  `}
`
export const Text = styled.p`
  font-size: 1.6rem;
  padding: var(--small);
  line-height: 1.6538461538;
  &::selection {
    color: var(--background);
  }
  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    font-size: var(--smallest);
  `}
`
export const Link = styled.a`
  text-decoration: none;
  font-style: italic;
  cursor: pointer;
  color: var(--background);
  &:hover {
    color: var(--highlight);
  }
  &::selection {
    background-color: var(--highliht);
    color: var(--black);
  }
`
export const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 2rem;
  width: 100%;
`
export const Highlight = styled.span`
  box-shadow: inset 0 -0.07em 0 #228b22;
  transition: box-shadow 0.2s ease-out, color 0.2s ease-out;
  &:hover {
    box-shadow: inset 0 -1.05em 0 #228b22;
    color: #222;
  }
  &::selection {
    color: var(--background);
    background-color: var(--black);
  }
`
export const Highlight2 = styled.span`
  background-image: linear-gradient(
    to right top,
    #e4d901,
    #e6d505,
    #e8d109,
    #eace0e,
    #ebca12
  );
  background-size: 200% 200%;
  background-clip: text;
  animation: rainbow 2s ease-in-out infinite;
  -webkit-background-clip: text;
  color: red;
  transition: box-shadow ease-out 2s ease-in-out, color 2s ease-in-out;
  cursor: text;
  &:hover {
    color: #e4d901;
    box-shadow: inset 0 -0.3em 0 #ebca12;
  }
  &::selection {
    color: #228b22;
    background-color: var(--black);
  }
`
export const Highlight3 = styled.span`
  color: var(--black);
  background-image: linear-gradient(
    to right top,
    #228b22,
    #44a323,
    #64bb21,
    #85d31c,
    #a8eb12
  );
  background-size: 100% 2em;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-out, color 0.2s ease-out;

  &:hover {
    background-size: 100% 10px;
    color: #e4d901;
    background-image: linear-gradient(
      to right top,
      #228b22,
      #44a323,
      #64bb21,
      #85d31c,
      #a8eb12
    );
  }
  &::selection {
    color: #228b22;
    background-color: var(--black);
  }
`
export const ItalicBold = styled.span`
  font-weight: 700;
  font-style: italic;
  &::selection {
    color: var(--background);
    background-color: var(--black);
  }
`
export const Text2 = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 4.2rem;
  padding: 1.5rem 4rem 2rem 0rem;
  color: var(--background);
  &::selection {
    color: #228b22;
    background-color: var(--black);
  }
`
export const Text3 = styled.p`
  font-family: 'Cairo', sans-serif;
  font-size: 5rem;
  padding: 10rem 0rem 1rem 0rem;
  color: #228b22;
  &::selection {
    color: var(--background);
  }
`
