import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      slug
      body {
        html
      }
    }
  }
`
export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`
export const GET_PLACES = gql`
  query getPlaces($first: Int) {
    places(first: $first, orderBy: id_DESC) {
      id
      slug
      name
      location_numeric
      adress
      tag
      state
      age
      period
      location {
        longitude
        latitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`
export const GET_PLACE_BY_SLUG = gql`
  query getPlaceBySlug($slug: String) {
    place(where: { slug: $slug }) {
      id
      slug
      name
      location_numeric
      adress
      tag
      state
      age
      period
      location {
        longitude
        latitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`
