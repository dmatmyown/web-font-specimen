import CharacterSet from "components/CharacterSet"
import ParagraphSample from "components/ParagraphSample"
import SizeComparison from "components/SizeComparison"
import Grayscale from 'components/Grayscale'
import SizeSample from 'components/SizeSmaple'

import "styles/index.css"

const font_name = "Noto Sans KR"

function App() {
    return (
        <div>
            <div id="header" className="container_16 clearfix">
                <div className="grid_16">
                    <h1 className="font-name">{font_name}</h1>
                </div>

                <ParagraphSample
                    text="옷을 무엇을 이상은 보이는 같이, 작고 하는 얼마나 품었기 위하여서. 품으며, 충분히 청춘의 타오르고 커다란 새가 귀는 인생의 봄바람을 봄바람이다. 눈이 붙잡아 힘차게 것이다. 되려니와, 관현악이며, 귀는 이상은 그러므로 실현에 살았으며, 못하다 불어 사막이다. 살 속잎나고, 꽃이 힘차게 사람은 반짝이는 것이다. 아니더면, 청춘이 심장은 것이다."
                />
                
                <CharacterSet />
            </div>

            
            <SizeComparison
                font_name={ font_name }
            />

            <Grayscale
                text="품에 착목한는 너의 이것을 운다. 그와 이상의 귀는 대한 때까지 사막이다. 석가는 내는 것은 듣는다. 그러므로 곳이 그것을 할지니, 봄바람이다. 자신과 과실이 속에 거선의 청춘의 황금시대의 피고, 것이다. 인도하겠다는 이상은 그들의 곳이 뜨거운지라, 끝까지 얼마나 것이 것은 위하여서. 봄바람을 현저하게 인도하겠다는 가슴에 뿐이다. 영락과 그들은 청춘에서만 설산에서 품으며, 끝에 그것을 긴지라 황금시대다."
            />
            
            <SizeSample
                text={{
                    kor: '다람쥐 헌 쳇바퀴에 타고파',
                    en: 'Pack my box with five dozen liquor jugs'
                }}
            />

            

            <div id="footer" className="container_12">
                <div className="grid_6 suffix_6">
                    <p>
                        This web font specimen is brought to you by
                        <a href="http://nicewebtype.com/">Nice Web Type</a>.
                    </p>
                    <p>
                        <a href="http://webfontspecimen.com/">Grab a copy and test your type</a>.
                        Licensed via
                        <a rel="license" href="http://creativecommons.org/licenses/by/3.0/us/">
                            Creative Commons
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}

export default App
