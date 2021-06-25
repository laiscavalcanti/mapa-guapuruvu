import styled from 'styled-components'
import { PropsIcons } from './index'
//import media from "styled-media-query"

export const SocialLinksWrapper = styled.div`
  display: flex;
  /*${media.lessThan('large')`
    display: flex;
    flex-direction: column;
  `}*/
`
export const SocialLinksList = styled.nav`
  display: flex;
  /*${media.lessThan('large')`
    display: flex;
    margin-bottom: 1.1rem;
    margin-right: 0rem;
  `}*/
`
export const SocialLinksItem = styled.li`
  margin: 0.8rem 0rem 0.8rem 1rem;
  /*${media.lessThan('large')`
    margin: 0.7rem;
  `}*/
`
export const SocialLinksLink = styled.a`
  transition: color 0.5s;
  transition: transform 0.2s;

  &:hover {
    color: #228b22;
  }
`
export const IconWrapper = styled.div<PropsIcons>`
  color: ${(props) => props.color || '#222'};
  width: ${(props) => props.height || '15px'};
  height: ${(props) => props.width || '15px'};
  /*${media.lessThan('large')`
    width: 21px;
    height: 21px;
  `}*/
`
