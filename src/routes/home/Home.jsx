import Feed from '../../components/feed/Feed';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <Navbar />
      <div className='bg-neutral-100 w-[95%] mx-auto'>
      <Feed />
      <Outlet />
      </div>
    </div>
  )
}

export default Home;