/* eslint-disable */
import ButtonBack from 'components/ButtonBack'
import ImageWrapper from 'components/ImageWrapper'
import * as S from './styles'

const HowToIdentify = () => {
  return (
    <>
      <S.ContainerForm>
        <S.Title>Como reconhecer uma árvore da espécie Guapuruvu?</S.Title>
        <S.Image>
          <ImageWrapper
            src="/img/como-identificar.jpg"
            alt="imagem de uma arvore e de um céu azul com nuvens"
            width={740}
            height={400}
          />
        </S.Image>
        <S.FormWrapper>
          <S.Body>
            Aprender a ler os detalhes e os aspectos de uma planta e de uma
            árvore é um espécie de “alfabetização vegetal”. Podemos aprender a
            “ler” a forma das folhas, a formação dos galhos, a textura, a cor e
            os desenhos do tronco, a subida do tronco em relação a outras
            árvores e plantas, a distribuição dos troncos e galhos em relação ao
            tronco principal, além da floração e semente! São tantos detalhes!
            Para reconhecer um Guapuruvu você deve observar o tronco, que é
            geralmente muito longo e sinuoso, de espessura regular. As árvores
            adultas podem chegar a 20 ou 30 metros. Os troncos são entre o cinza
            e o verde, tem as marcas do nascimento dos galhos da planta jovem, o
            que gera um padrão que parece uma cicatriz. Os galhos principais se
            abrem numa copa bem alta, e podem ser muito espessos. Os folíolos
            são pequenos (até 3cm), de um verde claro e brilhante, e se
            organizam na folha-galho de forma ‘pinada’, simétrica e harmônica,
            que pode ter até 1m de comprimento. A floração é amarela ouro e
            surgem em cachos fartos. Acontece no final da primavera e começo do
            verão, entre Novembro a Janeiro (no sul do Brasil). O fruto, onde se
            encontra a semente, é uma vagem dura achatada, marrom, de mais ou
            menos 15 cm, que se abre liberando uma semente que se espalha pelo
            vento (anemocoria).
          </S.Body>
        </S.FormWrapper>
        <ButtonBack />
      </S.ContainerForm>
    </>
  )
}

export default HowToIdentify
