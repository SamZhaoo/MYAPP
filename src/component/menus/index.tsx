import React from 'react';
import { history } from 'umi';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('hooks', '/hooks', null, [
    getItem('useContext', '/useContext'),
    getItem('useMemo', '/useMemo'),
    getItem('memo', '/memo'),
    getItem('useCallback', '/useCallback'),
    getItem('useRef', '/useRef'),
  ]),
];
export default function Menus() {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    const urlPath = e.keyPath.reverse().join('');
    history.push(urlPath);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 170 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
}
