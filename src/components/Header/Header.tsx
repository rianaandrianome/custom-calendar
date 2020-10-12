import React from 'react';
import { Menu } from '@fluentui/react-northstar';

export default function Header() {
  const items = [
    {
      key: 'brand',
      content: 'Binouze Corporation',
    },
    {
      key: 'home',
      content: 'Home',
    },
  ];
  return <Menu defaultActiveIndex={0} items={items} underlined primary />;
}
