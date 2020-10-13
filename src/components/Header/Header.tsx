import React from 'react';
import { Menu } from '@fluentui/react-northstar';

import './Header.scss';

export default function Header() {
  const items = [
    {
      key: 'brand',
      content: 'Binouze Corporation',
    },
    {
      key: 'home',
      content: 'Calendrier des réunions',
    },
  ];
  return (
    <Menu
      className="navbar"
      defaultActiveIndex={1}
      items={items}
      underlined
      primary
    />
  );
}
