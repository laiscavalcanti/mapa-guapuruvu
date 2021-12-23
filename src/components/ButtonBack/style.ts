import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: var(--black);
  margin-left: var(--medium);
  font-weight: 500;
  font-size: var(--smallest);
  &:hover {
    color: var(--highlight);
    background-color: transparent;
  }
`
export const Link = styled.a``
