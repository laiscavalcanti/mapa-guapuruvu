import * as S from './style'

type ButtonWrapperProps = {
  children: React.ReactNode
}

const ButtonWrapper = ({  children }: ButtonWrapperProps) => {
  return (
    <>
      <S.Button onClick={onClick}>{children}</S.Button>
    </>
  )
}

export default ButtonWrapper
