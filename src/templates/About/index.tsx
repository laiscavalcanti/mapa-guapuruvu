import LinkWrapper from "components/LinkWrapper"
import { CloseOutline } from '@styled-icons/evaicons-outline'
import * as S from "./styles"

const AboutTemplate = () => (
    <S.Content>
        <LinkWrapper href="/" >
            <CloseOutline size={32} />
        </LinkWrapper>
        <S.Heading>
            Mapa de Guapuruvu
        </S.Heading>
        <S.Body>
        Este formulário faz parte do projeto Mapa de Guapuruvus, criado pela artista e pesquisadora Cristina Ribas. Os dados sobre a(s) árvore(s) da espécie Guapuruvu (Schizolobium Parahyba) coletados na região metropolitana de Porto Alegre são considerados bem comum, e são disponibilizados pelo site do projeto http://www.mapadeguapuruvus.art. Os dados pessoais fornecidos por meio deste formulário tem por objetivo criar um canal de comunicação entre a artista e organizadora do projeto e a pessoa que forneceu os dados, permitindo a comunicação e a aprovação do uso da imagem e/ou do texto para este projeto. Os dados pessoais não serão sob qualquer circunstância compartilhados com outros projetos ou com empresas. Todo o conteúdo do site está sob licença Creative Commons 3.0. (Atribuição - Uso Não Comercial - Partilha nos Mesmos Termos 3.0 Brasil). Qualquer dúvida escreva para o email do projeto mapadeguapuruvus (arroba) gmail.com. Agradecemos sua participação! Por uma cidade mais arborizada, e para que a vida vegetal seja respeitada! 
        </S.Body>
    </S.Content>
)

export default  AboutTemplate