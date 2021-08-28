import { useRouter } from 'next/router'
import * as S from './style'

const ButtonBack = () => {
  const router = useRouter()

  return (
    <S.ButtonWrapper>
      <S.Button onClick={() => router.push('/')}> ← Voltar para home </S.Button>
      <S.LinkA href="/"></S.LinkA>
    </S.ButtonWrapper>
  )
}

export default ButtonBack
