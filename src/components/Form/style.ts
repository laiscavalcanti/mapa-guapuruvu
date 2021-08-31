import styled from 'styled-components'

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 3rem;
  padding-top: 2rem;
  .freebirdLightBackground {
    background-color: red;
  }
`
export const Body = styled.div`
  padding-top: 2rem;
  .forms {
    background-color: green;
  }
`
export const Title = styled.h1`
  font-size: var(--medium);
  margin-bottom: var(--medium);
  text-align: center;
  font-weight: 600;
  &::selection {
    color: var(--background);
  }
`
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 8rem;
  margin: var(--medium);
`
export const Name = styled.h2`
  
`