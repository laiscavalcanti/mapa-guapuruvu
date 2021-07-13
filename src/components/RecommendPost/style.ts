import styled from "styled-components"

export const RecommendedWrapper = styled.section`
  display: flex;
  border-top: 1px dashed var(--black);
  margin: 0 8rem 0 8rem;
  background-color: var(--background);
`
export const RecommendedLink = styled.a`
  align-items: center;
  background: var(--background);
  color: var(--black);
  display: flex;
  padding: 1rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &::selection {
    color: var(--highlight);
    background: var(--background);
  }
  &.previous {
    margin-left: 3rem;
  }
  &.next {
    justify-content: flex-end;
    margin-right: 3rem;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`