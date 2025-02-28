interface NavbarIconProps {
  name: string;
}

const NavbarIcon = ({ name }: NavbarIconProps) => {
  return (
    <div className='navbar-icon-container cursor-pointer'>
      <span className='material-symbols-outlined'>{name}</span>
    </div>
  );
}

export default NavbarIcon;