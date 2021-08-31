import { useRouter } from 'next/router'
import * as S from './style'

const ButtonBack = () => {
  const router = useRouter()

  return (
    <S.ButtonWrapper>
      <S.Button onClick={() => router.push('/')}> ← Voltar para home </S.Button>
      <S.Link href="/"></S.Link>
    </S.ButtonWrapper>
  )
}

export default ButtonBack
