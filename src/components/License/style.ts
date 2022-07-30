/* eslint-disable */
import styled from 'styled-components'

export const WrapperLicense = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 8rem;
  margin: var(--medium);
`
export const Container = styled.section`
  align-self: flex-start;
  max-width: 70%;
  background-color: rgba(139, 174, 99, 0.37);
  padding: var(--medium);
  margin: var(--medium);
`
export const Title = styled.h1`
  font-size: var(--medium);
  margin-bottom: var(--medium);
  text-align: center;
  font-weight: 300;
  &::selection {
    color: var(--background);
  }
`
export const Text = styled.p`
  margin-bottom: var(--large);
  font-size: 20px;
  line-height: 1.6538461538;
  font-family: 'Cairo', sans-serif;
  font-weight: 300;
  width: 90%;
  p {
    margin-bottom: var(--medium);
    font-size: var(--small);
  }
  &::selection {
    color: var(--background);
    background-color: var(--black);
  }
`
