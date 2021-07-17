import styled from 'styled-components'
import { PropsIcons } from './index'
//import media from "styled-media-query"

export const SocialLinksWrapper = styled.div`
  display: flex;
`
export const SocialLinksList = styled.nav`
  display: flex;
`
export const SocialLinksItem = styled.li`
  margin: 0.8rem 0rem 0.8rem 1rem;
`
export const SocialLinksLink = styled.a`
  transition: color 0.5s;
  transition: transform 0.2s;
`
export const IconWrapper = styled.div<PropsIcons>`
  color: ${(props) => props.color || '#222'};
  width: ${(props) => props.height || '18px'};
  height: ${(props) => props.width || '18px'};
  margin: ${(props) => props.margin || '0.5rem'};
  &:hover {
    color: var(--background);
  }
`
