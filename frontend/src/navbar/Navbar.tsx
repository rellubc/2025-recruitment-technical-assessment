import { useState } from 'react';
import FreeroomsLogoOpen from '../../assets/freeRoomsLogo.png';
import FreeroomsLogoClosed from '../../assets/freeroomsDoorClosed.png';
import NavbarIcon from './buttons/NavbarIcon';

const Navbar = () => {
  const [door, setDoor] = useState<string>(localStorage.getItem('door') || 'open');

  const changeDoor = (): void => {
    const change = door === 'closed' ? 'open' : 'closed';
    setDoor(change);
    localStorage.setItem('door', change);
  };

  return (
    <>
      <div className='flex flex-row justify-between border-b-[1px] border-gray-200 p-2'>
        <div className='flex items-center cursor-pointer'>
          <img src={door === 'open' ? FreeroomsLogoOpen : FreeroomsLogoClosed} className='h-10 w-10' onClick={() => changeDoor()}/>
          <h2 className='title text-3xl font-bold'>Freerooms</h2>
        </div>
        <div className='flex flex-row items-center gap-1'>
          <NavbarIcon name={'search'} />
          <NavbarIcon name={'grid_view'} />
          <NavbarIcon name={'map'} />
          <NavbarIcon name={'dark_mode'} />
        </div>
      </div>
    </>
  );
}

export default Navbar;