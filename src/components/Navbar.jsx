import  "./Navbar.css";

const Navbar = () => {
  return (
      <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        <ul>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/services' className='services'>
            <li>Services</li>
          </Link>
          <Link to='/skills' className='skills'>
            <li>Skills</li>
          </Link>
          <Link to='/contact' className='home'>
            <li>contact</li>
          </Link>
        </ul>
      </nav>
  )
}
export default Navbar