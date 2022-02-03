import { v4 as uuid } from "uuid"

function SizeComparison({ font_name }) {
    const item_names = [font_name, '기본 돋움체', '기본 바탕체', '기본 굵은 바탕체']

    return (
        <div className="container_16 clearfix">
            <div className="grid_16">
                <h2>
                    글자 크기 비교 <span>&#8211; font-size: 90px</span>
                </h2>

                <div className="bodysize">
                    <table>
                        <tr>
                            {
                                item_names.map(name => (
                                    <th key={ uuid() }> 
                                        { name }
                                    </th>
                                ))
                            }
                        </tr>

                        <tr>
                            {
                                item_names.map((non, idx) => (
                                    <td className={`tf typeface-${idx + 1}`}>
                                        <span>본문</span>
                                    </td>
                                ))
                            }
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SizeComparison