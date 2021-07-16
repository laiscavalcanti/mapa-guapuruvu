import * as S from './style'

type RecommendesPostsProps = {
  next: string
  previous: string
  href: string
  children: React.ReactNode
}

const RecommendedPosts = ({
  next,
  previous,
  children,
  href
}: RecommendesPostsProps) => (
  <S.RecommendedWrapper>
    {previous && <S.RecommendedLink href={href}>{children}</S.RecommendedLink>}
    {next && (
      <S.RecommendedLink href={href} className="next">
        {children}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

export default RecommendedPosts
