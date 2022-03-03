/* eslint-disable */
import ButtonBack from 'components/ButtonBack'
import { ItalicBold } from 'components/Form/style'
import ImageWrapper from 'components/ImageWrapper'
import * as S from './styles'

const HowToIdentify = () => {
  return (
    <>
      <S.ContainerForm>
        <S.Title>Como plantar uma semente de Guapuruvu</S.Title>
        <S.Image>
          <ImageWrapper
            src="/img/como-identificar2.jpg"
            alt="imagem de uma arvore e de um céu azul com nuvens"
            width={740}
            height={400}
          />
        </S.Image>
        <S.FormWrapper>
          <S.Body>
            <ItalicBold>Precisa de: </ItalicBold>
            <br></br>- Um Pote
            <br></br>- Terra
            <br></br>- Semente de Guapuruvu
            <br></br>- Água
            <br></br>
            <br></br>
            <ItalicBold>Como plantar:</ItalicBold>
            <br></br>
            1.Dê uma machucadinha na semente, pode ser em uma pedra ou em um
            tijolo
            <br></br>
            2.Encha metade de um pote médio de planta com terra
            <br></br>
            3.Coloque a semente na vertical
            <br></br>
            4.Tampe a semente com terra, sem apertar muito
            <br></br>
            5.E coloque um pouco de água
            <br></br>
            <br></br>
            Fique dando água à planta, mais ou menos 50 ou 60ml por dia. Depois
            de cerca de 10 dias ou mais, vai sair um broto grosso verde claro
            para fora da terra. Daí você pode começar a dar 100ml de água.
            Depois de alguns dias, vai sair duas folhas do broto. Depois de
            algumas semanas a planta vai formar um "mini tronco". E vai
            "multiplicar" as folhas, formando pequenos galhos.
            <br></br>
            <br></br>
            Quando ela adquirir mais ou menos 1 metro, você pode plantá-la em
            algum parque ou no pátio de sua casa. Ela cresce 3 metros por ano.
            Depois ela vai ficar bem grande, então é melhor que seja em algum
            lugar bem aberto e que não tenha nada debaixo da árvore, como
            estacionamento, casa, etc.
          </S.Body>
        </S.FormWrapper>
        <ButtonBack />
      </S.ContainerForm>
    </>
  )
}

export default HowToIdentify
