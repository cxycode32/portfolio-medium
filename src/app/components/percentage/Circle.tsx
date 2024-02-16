import '../../skills/Skills.css'
import './Circle.css';

export interface CircleProps {
    dataCircle: number,
    dataColor1: string,
    dataColor2: string,
    progressValue: string,
    circleText: string,
}

export const Circle: React.FC<CircleProps> = ({ dataCircle, dataColor1, dataColor2, progressValue, circleText }) => {

    const deg: number = 360 / 100 * dataCircle;

    return (
        <div className='circle-container font-semibold col-sm-4'>
            <div className='circle-wrapper flex flex-col items-center'>
                <div
                    className='circle-progress'
                    data-circle={dataCircle}
                    data-color1={dataColor1}
                    data-color2={dataColor2}
                    style={{
                        background: `conic-gradient(rgb(215, 176, 101) ${deg}deg, rgb(82, 82, 82) 0deg);`
                    }}
                >
                    <div className='progress-value relative text-3xl'>
                        {progressValue}
                    </div>
                </div>
                <span className='circle-text text-lg'>
                    {circleText}
                </span>
            </div>
        </div>
    )
}