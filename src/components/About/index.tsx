import ButtonBack from 'components/ButtonBack'
import ImageWrapper from 'components/ImageWrapper'
import Link from 'next/link'
import * as S from './style'

const About = () => {
  return (
    <>
      <S.Wrapper>
        <S.Heading>Sobre o Mapa de Guapuruvus</S.Heading>
        <S.Image>
          <ImageWrapper
            src="/img/guapu03.jpg"
            alt="imagem de uma arvore e de um céu azul com nuvens"
            width={1000}
            height={500}
          />
        </S.Image>

        <S.Container>
          <S.Body>
            <S.Italic>Mapa de Guapuruvus</S.Italic> é um mapa colaborativo da
            espécie de árvores Guapuruvu (Schizolobium parahyba) na cidade de
            Porto Alegre e região metropolitana. O mapa gera uma visualização da
            relação de proximidade entre as árvores e sua distribuição na
            cidade. Com o mapa podemos conhecer e imaginar a relação entre a
            cobertura vegetal das copas e das raízes, e como a cidade se
            relaciona com as árvores, ou se tem refutado ela. O projeto quer
            sensibilizar a relação entre as pessoas e as árvores, assim como com
            vida vegetal e animal na cidade. Mapear compreende o envio da
            localização da árvore, uma foto da árvore ou um desenho, e um relato
            textual. O mapa vai sendo atualizado à medida que chegam novas
            árvores e relatos. Pensando na saúde coletiva, e na segurança de
            todos na movimentação pela cidade no contexto da sindemia do corona
            vírus, o projeto proporciona a percepção ambiental da cidade e
            também nos permite pensar como a cidade tem sido acolhida pela vida
            vegetal, ou se a cidade tem refutado estas formas de vida, e quais
            são as consequências que a retirada de árvores traz para a cidade.
            As árvores também marcam o tempo em relação às transformações
            urbanas e à vida, os momentos de nossas vidas em comum na cidade, e
            como a cidade pode se tornar um lugar que reconhece a importância da
            vida vegetal para todas as formas de vida. Para encontrar um
            Guapuruvu, é preciso deambular na cidade com os olhos atentos! Seja
            andar, pedalar, olhar pela janela do ônibus, indo para o trabalho ou
            passeando de carro. São árvores de grande porte, cujo tronco central
            se projeta majestosamente e abre uma copa vasta e arredondada. As
            sementes espalhadas pelo chão são geralmente um indício de que
            estamos perto de uma árvore desta espécie, e isso gera uma
            brincadeira interessante, que nos faz atentar também para outras
            espécies, sementes e folhas. As sementes no solo nos sinalizam a
            relação com a terra e com a germinação, assim como atentam para a
            existência das raízes e dessas relações vitais que se desenrolam
            literalmente sob nossos pés e, ao mesmo tempo, sobre nossas cabeças.
            Por isso o Mapa também é uma redes de olhares, de raízes e de fluxos
            vitais, que celebra a relação entre humanos e não-humanos, que
            habitam e constituem a coexistência entre a cidades e o bioma onde
            ela está inserida. <em>Envie a localização de uma árvore</em>{' '}
            <Link href="/formulario">
              <S.Link>formulario</S.Link>
            </Link>
          </S.Body>
          <S.Body>
            {' '}
            <S.H2>Como reconhecer uma árvore da espécie Guapuruvu? </S.H2>
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
        </S.Container>
        <ButtonBack />
      </S.Wrapper>
    </>
  )
}

export default About
