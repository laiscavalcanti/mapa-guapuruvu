import client from 'graphql/Client'
import { GetPlacesQuery, GetPlaceBySlugQuery } from 'graphql/generated/graphql'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import PlacesTemplate, { PlacesTemplateProps } from 'templates/Places'

export default function Place({ place }: PlacesTemplateProps) {
  const router = useRouter()

  // para gerar as demais páginas que não são as 3 primeiras definidas no
  //getStaticPaths

  if (router.isFallback) return null //podendo retornar um loading, por ex, enquanto carrega a página

  return <PlacesTemplate place={place} />
}

export async function getStaticPaths() {
  // criando o caminho das páginas
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  }) //fazendo a requisição para as 3 primeiras places

  const paths = places.map(({ slug }) => ({
    // o map para buscar as páginas
    params: { slug }
  }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  return {
    props: {
      place
    }
  }
}
