import client from 'graphql/Client'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
//import AboutTemplate from 'templates/About'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'

export default function Page({ heading, body}: PageTemplateProps) {
  const router = useRouter()

    // para gerar as demais páginas que não são as 3 primeiras definidas no 
  //getStaticPaths

  if(router.isFallback) return null //podendo terorna um loading, por ex, enquanto carrega a página

  return <PageTemplate heading={heading} body={body}/>
}


export async function getStaticPaths(){ // criando o caminho das páginas
    const { pages } = await client.request<GetPagesQuery>(GET_PAGES, {first: 3}) //fazendo a requisição para as 3 primeiras pages

    const paths = pages.map(({ slug }) => ({ // o map para buscar as páginas
        params: { slug }
    }))
    return { paths, fallback: true}
}

export const getStaticProps: GetStaticProps = async ({ params}) => {
  const {page} = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if(!page) return {notFound: true}

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
