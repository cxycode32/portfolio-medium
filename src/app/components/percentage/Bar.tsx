import '../../skills/Skills.css'
import './Bar.css';

export interface BarProps {
    label: string,
    percent: number,
}

export const Bar: React.FC<BarProps> = ({ label, percent }) => {
    return (
        <div className='skill'>
            <div className='skill-label'>
                {label}
                <span className='skill-percent'>
                    {percent}%
                </span>
            </div>
            <div className='progress'>
                <div
                    className='skill-fill progress-bar animation-done'
                    data-fill={`${percent}%`}
                    style={{
                        width: `${percent}%`
                    }}
                ></div>
            </div>
        </div>
    )
}