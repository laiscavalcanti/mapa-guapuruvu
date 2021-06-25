import styled from 'styled-components'
import { PropsColorLink } from './index'
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
export const SocialLinksLink = styled.a<PropsColorLink>`
  color: ${(props) => props.colorlink || '#222'};
  transition: color 0.5s;
  transition: transform 0.2s;

  &:hover {
    color: #228b22;
  }
`
export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
  /*${media.lessThan('large')`
    width: 21px;
    height: 21px;
  `}*/
`
