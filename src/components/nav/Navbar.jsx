import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex flex-row  space-x-7 bg-amber-700 mt-2 h-20">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
    </nav>
  );
}

export default Navbar;
