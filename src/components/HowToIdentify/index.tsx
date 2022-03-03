/* eslint-disable */
import ButtonBack from 'components/ButtonBack'
import { ItalicBold } from 'components/Form/style'
import ImageWrapper from 'components/ImageWrapper'
import * as S from './styles'

const HowToIdentify = () => {
  return (
    <>
      <S.ContainerForm>
        <S.Title>Como reconhecer uma árvore da espécie Guapuruvu?</S.Title>
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
            Os Guapuruvus se espalham pela floresta da Mata Atlântica e tem
            floração entre Novembro e Janeiro (no sul do Brasil). Suas sementes
            se dispersam pelo ar de forma anemocoria em uma cápsula-asa. A
            Guapuruvu vive em média 60 anos e nos anos iniciais cresce 3m por
            ano. Aprender a ler os detalhes e os aspectos de uma planta e de uma
            árvore é uma espécie de “alfabetização vegetal”. Podemos aprender a
            “ler” a forma das folhas, a formação dos galhos, a textura, a cor e
            os desenhos do tronco, o desenho do tronco em relação a outras
            árvores e plantas, a distribuição dos troncos e galhos em relação ao
            tronco principal, além da floração e semente! São tantos detalhes!
            Para reconhecer um Guapuruvu você deve observar o tronco, que é
            geralmente alto e não muito sinuoso, de espessura regular. As
            árvores adultas podem chegar a{' '}
            <ItalicBold>20 ou 30 metros.</ItalicBold> Os troncos são lisos,
            entre o cinza e o verde, e tem as marcas do nascimento dos galhos da
            planta jovem, o que gera um padrão que parece uma cicatriz. Os
            galhos principais se abrem numa{' '}
            <ItalicBold>copa larga bem alta</ItalicBold> , e podem ser muito
            espessos. Os <ItalicBold>folíolos</ItalicBold> são pequenos (até
            3cm), de um verde claro e brilhante, e se organizam na folha-galho
            de forma ‘pinada’, simétrica e harmônica, que pode ter até 1m de
            comprimento.
            <ItalicBold>A floração é amarela ouro</ItalicBold> e surgem em
            cachos fartos. Acontece no final da primavera e começo do verão,
            entre Novembro a Janeiro (no sul do Brasil). O fruto, onde se
            encontra a <ItalicBold>semente</ItalicBold>, é uma vagem dura
            achatada, marrom, de mais ou menos 15 cm, que se abre liberando uma
            semente que se espalha pelo vento (anemocoria).
          </S.Body>
        </S.FormWrapper>
        <ButtonBack />
      </S.ContainerForm>
    </>
  )
}

export default HowToIdentify
