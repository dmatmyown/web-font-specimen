import { v4 as uuid } from "uuid"

function Grayscale({ text }) {
    // three digits hex codes for color
    const whiteBG = ['000', '333', '666', '999', 'CCC']
    const blackBG = ['FFF', 'CCC', '999', '666', '333']

    return (
        <div className="container_16 clearfix">
            <div className="grid_16 clearfix">
                <h2>
                    흑백 예시 <span>&#8211; CSS hex color</span>
                </h2>
            </div>

            <div className="grayscale clearfix">
                <div className="grid_8 white">
                    {
                        whiteBG.map(col => (
                            <div className={`c-${col} relative`} key={ uuid() }>
                                <p className="sample-size sample-size-left">
                                    {`#${col}`}
                                </p>
                                <p>
                                    {text}
                                </p>
                            </div>
                        ))
                    }
                </div>

                <div className="grid_8 black">
                    {
                        blackBG.map(col => (
                            <div className={`c-${col} relative`} key={ uuid() }>
                                <p className="sample-size sample-size-right">
                                    {`#${col}`}
                                </p>
                                <p>
                                    {text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Grayscale