import { v4 as uuid } from 'uuid'

const characters = [
    ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',],
    ['가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타', '파', '하',],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ],
    ['&', '@', '.', ',', '?', '!', "'", '"', '(', ')']
]

function CharacterSet() {
    return (
        <div className="grid_8 charset">
            <h2>글자</h2>
            <div className="sample-charset s-56">
                {
                    characters.map(row => (
                        <p className="charset-row" key={uuid()}>
                            { 
                                row.map(char => (
                                    <span className="charset-item" key={uuid()}>
                                        {char}
                                    </span>
                                )) 
                            }
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default CharacterSet