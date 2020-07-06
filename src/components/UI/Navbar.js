import React, { useState } from 'react';

const Navbar = (props) => {
  const navbarList = ['characters', 'episodes', 'quotes', 'deaths'];
  const [active, setActive] = useState('');
  return (
    <ul className="navbar">
      {navbarList.map((item, index) => {
        return (
          <li
            key={index}
            className={item === active ? 'active' : 'navbarItem'}
            onClick={() => {
              props.changeUrl(item);
              setActive(item);
            }}
          >
            {item.toUpperCase()}
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
