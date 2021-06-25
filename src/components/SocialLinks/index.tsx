import { Icons } from './Icons'
import links from './content'

import * as S from './style'

export type PropsIcons = {
  color: string,
  height: string,
  width: string,
  margin: string
}

const SocialLinks = ({color, height, width, margin}: PropsIcons) => {
  return (
    <>
      <S.SocialLinksWrapper>
        <S.SocialLinksList >
          {links.map((link, i) => {
            const Icon = Icons[link.label]
            return (
              <S.SocialLinksItem key={i} >
                <S.SocialLinksLink
                  href={link.url}
                  title={link.label}
                  target="_blank"
                  rel="noopener noreferrer" 
                >
                  <S.IconWrapper height={height} width={width} color={color} margin={margin}>
                    <Icon />
                  </S.IconWrapper>
                </S.SocialLinksLink>
              </S.SocialLinksItem>
            )
          })}
        </S.SocialLinksList>
      </S.SocialLinksWrapper>
    </>
  )
}

export default SocialLinks
