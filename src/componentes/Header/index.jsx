import logo from '../../svg/logo.svg';
import '../../css/style.css'
const Header = () =>{
    return(
        <>
        <header className='space-between '>
        <div className="logo ">
                <img src={logo} alt="logo"/>
            </div>

            <div className="search">
                <input className='inputBtn' type='text' name='seach'placeholder='Pesquise por um arquivo'/>
            </div>

            <ul className="menu flex">
                <li className='nav-link'><a href='#'>Categoris</a></li>
                <li className='nav-link'><a href='#'>Abour</a></li>
                <li className='nav-link'><a href='#'>Contact</a></li>
             </ul> 
        </header>
        </>
    )
}

export default Header;