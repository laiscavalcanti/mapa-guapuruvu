import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: var(--background);
  margin-left: var(--medium);
  &:hover {
    color: var(--highlight);
  }
`
export const Link = styled.a``
