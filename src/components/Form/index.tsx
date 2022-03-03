/* eslint-disable */
import ButtonBack from 'components/ButtonBack'
import ImageWrapper from 'components/ImageWrapper'
import * as S from './style'

const Form = () => {
  return (
    <>
      <S.ContainerForm>
        <S.Title>Enviando dados sobre um Guapuruvu</S.Title>
        <S.Image>
          <ImageWrapper
            src="/img/guapu03.jpg"
            alt="imagem de uma arvore e de um céu azul com nuvens"
            width={740}
            height={400}
          />
        </S.Image>
        <S.FormWrapper>
          <S.Body>
            Este formulário faz parte do projeto{' '}
            <S.ItalicBold>Mapa de Guapuruvus</S.ItalicBold>, criado pela artista
            e pesquisadora{' '}
            <S.Link>
              {' '}
              <a
                href="https://cristinaribas.org/escritos/"
                target="_blank"
                rel="noreferrer"
              >
                Cristina Ribas
              </a>
            </S.Link>
            . Os dados sobre a(s) árvore(s) da espécie Guapuruvu (Schizolobium
            Parahyba) coletados na região metropolitana de Porto Alegre são
            considerados bem comum, e são disponibilizados pelo site do projeto
            <S.ItalicBold> http://www.arvoresurbanas.net</S.ItalicBold>
            <br></br>
            <br></br>
            Os dados pessoais fornecidos por meio deste formulário tem por
            objetivo criar um canal de comunicação entre a artista e
            organizadora do projeto e a pessoa que forneceu os dados, permitindo
            a comunicação e a aprovação do uso da imagem e/ou do texto para este
            projeto.{' '}
            <S.ItalicBold>
              Os dados pessoais não serão sob qualquer circunstância
              compartilhados com outros projetos ou com empresas.
            </S.ItalicBold>
            Todo o conteúdo do site está sob licença Creative Commons 4.0.
            (Atribuição - Uso Não Comercial - Partilha nos Mesmos Termos 4.0
            Brasil). 
            <br></br>
            <br></br>
            Qualquer dúvida escreva para o email do projeto
            mapadeguapuruvus@gmail.com. Agradecemos sua participação! Por uma
            cidade mais arborizada, e{' '}
            <S.ItalicBold>
              para que a vida vegetal seja respeitada!
            </S.ItalicBold>{' '}
          </S.Body>
          <S.Body>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfysY5zFwQM6hyUfI_Q1E9lbi5uYdcahPKHWjY9BoihMo9eRQ/viewform?usp=sf_link"
              width="640"
              height="903"
              frameBorder="0"
            >
              Carregando…
            </iframe>
          </S.Body>
        </S.FormWrapper>
        <ButtonBack />
      </S.ContainerForm>
    </>
  )
}

export default Form
