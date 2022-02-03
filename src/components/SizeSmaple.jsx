import { Fragment } from 'react'
import { v4 as uuid } from 'uuid'

function SizeSample({ text }) {
    const kor_sizes = [
        [36, 30, 24],
        [21, 18],
        [16, 14, 13],
        [12, 11, 10, 9]
    ]

    const en_sizes = [
        [9, 10],
        [11, 12, 13],
        [14, 16, 18],
        [21, 24, 30]
    ]

    return (
        <div className="container_16 ulc clearfix">
            <div className="grid_16">
                <h2>
                    폰트 크기 예시 <span>&#8211; font-size(px)</span>
                </h2>
            </div>

            <div className="grid_16 clearfix font-size-flex relative">
                <div className="font-size-flex-col">
                    {
                        kor_sizes.map(row => (
                            <div 
                                className=""
                                key={uuid()}
                            >
                                {
                                    row.map(size => (
                                        <div className={`s s-${size} font-size-text-container font-size-flex relative`}>
                                            <p className="sample-size sample-size-left">
                                                {size}
                                            </p>
                                            <p className="font-size-text font-size-text-left">
                                                { text.kor }
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                
                <div className="font-size-abs-col">
                    {
                        en_sizes.map(row => (
                            <div 
                                className="" 
                                key={uuid()}
                            >
                                {
                                    row.map(size => (
                                        <div className={`s s-${size} font-size-text-container font-size-flex justify-end relative`}>
                                            <p className="sample-size sample-size-right">
                                                { size }
                                            </p>
                                            <p className="font-size-text font-size-text-right">
                                                { text.en }
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default SizeSample