import './Footer.css'

export const Footer: React.FC = () => {
    return (
        <footer id='footer' className='flex justify-between items-center'>
            <div className='flex'>
                <p>&#169; 2024 All rights reserved by WordPressRiver</p>
                <p id='hide1'>
                    Powered by&nbsp;
                    <a href='#'>Bootstrap 5</a>
                </p>
                <p id='hide2'>
                    <a href='#'>Buy Template</a>
                </p>
            </div>
            <aside className='flex'>
                <p id='hide3'>
                    <a href='#'>Buy Template</a>
                </p>
                <p>Made In HTML5</p>
            </aside>
        </footer>
    )
}