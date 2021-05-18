import styled from 'styled-components'

export const ContainerText = styled.div`
  background-color: var(--black);
  width: 100%;
  display: flex;
  height: 40rem;
  padding: 3rem;
`
export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  color: inherit;
  max-width: 500px;
  position: relative;
  padding: 2rem;
  box-shadow: inset 0 0 0 4px #000, inset -4px -4px 0 6px #ccc;
  background-color: var(--background);

  &:before {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    transform-origin: 0 bottom 0;
    transform: scaleY(0);
    transition: 0.4s ease-out;
  }

  &:hover {
    .post-text {
      color: #fff;
    }
    &:before {
      transform: scaleY(1);
    }
  }

  .post-text {
    position: relative;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.333;
    transition: 0.4s ease-out;
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
    color: #228b22;
    background-color: var(--black);
  }
`
export const Highlight2 = styled.span`
 background-image: linear-gradient(to right top, #e4d901, #e6d505, #e8d109, #eace0e, #ebca12);
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
  font-weight: 600;
  font-style: italic;
  &::selection {
    color: #228b22;
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