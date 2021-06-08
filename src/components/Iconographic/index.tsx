import * as S from './style'
import { Lottie } from '@crello/react-lottie'
import mapView from './animations/mapView.json'
import photo from './animations/photo.json'
import email from './animations/email.json'
import takePhoto from './animations/take-photo.json'

const Icongraphic = () => {
  return (
    <S.IcongraphicWrapper>
      <S.Icon>
        <Lottie
          width="100px"
          height="100px"
          className="lottie-container basic"
          config={{ animationData: mapView, loop: true, autoplay: true }}
        />
      </S.Icon>

      <S.Icon>
      <Lottie
          width="100px"
          height="100px"
          className="lottie-container basic"
          config={{ animationData: photo, loop: true, autoplay: true }}
        />
      </S.Icon>

      <S.Icon>
      <Lottie
          width="100px"
          height="100px"
          className="lottie-container basic"
          config={{ animationData: email, loop: true, autoplay: true }}
        />
      </S.Icon>
    </S.IcongraphicWrapper>
  )
}
export default Icongraphic
