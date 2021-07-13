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
export const ButtonShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 90rem;
  top: 10rem;
`
export const IconShare = styled.li`

`

export const Heading = styled.h1`
  font-size: var(--medium);
  margin-bottom: var(--medium);
  text-align: center;
  font-weight: bold;
`
export const ListField = styled.div`
  margin: 1rem 2rem 4rem 0;
`
export const FieldWrapper = styled.div`
  display: flex;
`
export const Value = styled.p`
  font-size: var(--smallest);
  margin-left: 1rem;
`
export const Field = styled.p`
  font-size: var(--smallest);
  font-weight: bold;
`
export const Body = styled.div`
  margin-bottom: var(--large);

  p {
    margin-bottom: var(--medium);
    font-size: var(--small);
  }
`
export const Gallery = styled.div`
  display: grid;
  margin-top: var(--medium);
  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
export const Caption = styled.p`
  font-size: var(--small);
  color: var(--grey);
  margin-bottom: var(--medium);
  a {
    font-size: var(--small);
  }
`
