import { v4 as uuid } from 'uuid'

function ParagraphSample({ text }) {
    const font_sizes = [18, 16, 14, 13, 12, 10, 9]

    return (
        <div className="grid_8">
            <h2>
                문단 예시 <span>&#8211; font-size(px) + 1.4% line-height</span>
            </h2>

            {font_sizes.map(size => (
                <div 
                    className={`s s-${size} relative`}
                    key={ uuid() }
                >
                    <p className="sample-size sample-size-left">
                        { size }
                    </p>
                    <p className="trunc">
                        {text}
                    </p>
                </div>
            ))}
        </div>
    )

}

export default ParagraphSample