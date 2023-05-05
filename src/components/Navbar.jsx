import  "./Navbar.css";

const Navbar = () => {
  return (
      <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        <ul className="nav-links">
          <li className="nav-links">Home</li>
          <li className="nav-links">About</li>
          <li className="nav-links">Skills</li>
          <li className="nav-links">Contact</li>
          <li className="nav-links">Services</li>
        </ul>
      </nav>
  )
}
export default Navbar