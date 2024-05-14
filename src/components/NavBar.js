import './NavBar.css'
import { BsPersonSquare } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src="logoMain.png" alt='logo'/>
        <h2>Web Activity Tracker</h2>
        <div><img src='profile.png' alt='profile' /></div>
      </div>
    </>
  );
};

export default Navbar;
