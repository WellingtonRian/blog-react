import logo from '../../svg/logo.svg';
const Header = () =>{
    return(
        <>
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="search">
            <input type='text' name='seach'placeholder='Pesquise por um arquivo'/>
          </div>
          <ul className="menu">
            <li className='nav-link'>Categoris</li>
            <li className='nav-link'>Abour</li>
            <li className='nav-link'>Contact</li>
            </ul>  
        </>
    )
}

export default Header;