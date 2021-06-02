import * as S from './style'
import { Lottie } from "@crello/react-lottie"
import point from "./animations/point.json"

 const Icongraphic = () => {
    return(
        <S.IcongraphicWrapper>
            <S.Icon>
            <Lottie
            width="100px"
            height="100px"
            className="lottie-container basic"
            config={{ animationData: point, loop: true, autoplay: true }}
        />
            </S.Icon>

            <S.Icon>
                
            </S.Icon>

            <S.Icon>
                
            </S.Icon>
        </S.IcongraphicWrapper>
    )
}
export default Icongraphic