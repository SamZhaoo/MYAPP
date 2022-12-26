import React, { useEffect, useState } from 'react';
import { history, useLocation } from 'umi';
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
    setOpenKeys(`${e.keyPath[0]}`);
    setSelectedKeys(`${e.keyPath[1]}`);
  };
  const [openKeys, setOpenKeys] = useState('/hooks');
  const [selectedKeys, setSelectedKeys] = useState('/useContext');
  let location = useLocation();
  useEffect(() => {
    const urlArr = location.pathname.split('/');
    urlArr.shift();
    setOpenKeys(`/${urlArr[0]}`);
    setSelectedKeys(`/${urlArr[1]}`);
  }, []);
  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: 170 }}
        openKeys={[openKeys]}
        selectedKeys={[selectedKeys]}
        mode="inline"
        items={items}
      />
    </>
  );
}
