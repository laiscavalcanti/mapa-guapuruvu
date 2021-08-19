export type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapPropsplc = {
  plc?: Place[]
}

const RecentsMaps = ({ plc }: MapPropsplc) => {
  return (
    <div>
      {plc?.slice(0, 2).map(( place ) => {
        <div>{place.name}</div>
      })}
    </div>
  )
}

export default RecentsMaps
