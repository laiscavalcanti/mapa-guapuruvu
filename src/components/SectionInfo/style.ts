import styled from 'styled-components'

export const ContainerText = styled.div`
  display: flex;
  background-color: var(--black);
  padding: 2rem 5rem 2rem 5rem;
  cursor: url(/img/icone_guapuruvu.png), auto;
`
export const Image = styled.div`
  padding: 2rem 8rem 1rem 4rem; 
`
export const SectionFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 4rem;
  background-color: var(--black);
  color: #e4d901;
`
export const Container = styled.div`
  width: 85%;
`
export const Highlight = styled.span`
  box-shadow: inset 0 -0.07em 0 #729e01;
  transition: box-shadow 0.2s ease-out, color 0.2s ease-out;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 -1.05em 0 #729e01;
    color: #222;
  }
`
export const Highlight2 = styled.span`
  background: linear-gradient(to right top, #729e01, #a56700, #ad1e27, #860057, #191970);
  background-size: 200% 200%;
  background-clip: text;
  animation: rainbow 2s ease-in-out infinite;
  -webkit-background-clip: text;
  color: rgba(23, 37, 38, 0);
  transition: box-shadow ease-out 2s ease-in-out,
  color 2s ease-in-out;
  cursor: text;
    &:hover {
        color: #e4d901;
        box-shadow: inset 0 -0.3em 0 #729e01;
    }
`
export const Highlight3 = styled.span`
    color: var(--black);
    background-image: linear-gradient(to right top, #228b22, #44a323, #64bb21, #85d31c, #a8eb12);
    background-size: 100% 2em;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.2s ease-out,
        color 0.2s ease-out;

    &:hover {
        background-size: 100% 10px;
        color: #e4d901;
        background-image: linear-gradient(to right top, #228b22, #44a323, #64bb21, #85d31c, #a8eb12);
    }
`

export const Text1 = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-size: 2.3rem;
  padding: 1.5rem 0rem 1rem 0rem;
  letter-spacing: 3px;
`
export const Text2 = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 4.2rem;
  padding: 1.5rem 0rem 2rem 4rem;
`
export const Text3 = styled.p`
  font-family: 'Cairo', sans-serif;
  font-size: 2.8rem;
  padding: 1.5rem 0rem 1rem 0rem;
`
export const Text4 = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 3.5rem;
  padding: 1.5rem 0rem 1rem 0rem;
`
export const Text5 = styled.p`
  font-family: 'Arvo', serif;
  font-size: 3rem;
  padding: 1.5rem 0 1rem 0;
`
export const Text6 = styled.p`
  font-size: 2.5rem;
  padding: 1.5rem 0 1.5rem 5rem;
`
export const Text7 =  styled.p`
  display: flex;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;
  font-size: 2.4rem;
  padding: 1.5rem 0 1.5rem 0rem;
  font-weight: 600;
`
export const Text8 = styled.p`
  display: flex;
  justify-content: flex-end;
  font-family: 'Arvo', serif;
  font-size: 3rem;
  padding: 1.5rem 4rem 1.5rem 0rem;

`