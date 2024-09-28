import { Link } from 'react-router-dom';
import '../index.css';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
      <nav className='nav'>
        <Link to ="/" className='nav-link'>Home</Link>
        <Link to ="/SavedCandidates" className='nav-link'>Potential Candidates</Link>
      </nav>
    </div>
  )
};

export default Nav;
