import React, { useEffect, useState } from 'react';
import { history, useLocation } from 'umi';
import type { MenuProps, SubMenuProps } from 'antd';
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
  getItem('Navigation Two', 'sub2', null, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
  ]),
  getItem('Navigation Three', 'sub4', null, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
export default function Menus() {
  const onClick: MenuProps['onClick'] = (e) => {
    const urlPath = e.keyPath.reverse().join('');
    history.push(urlPath);
    setOpenKeys(`${e.keyPath[0]}`);
    setSelectedKeys(`${e.keyPath[1]}`);
  };
  const onOpenChange = (e: string[]) => {
    if (e.length > 0) {
      const keyStr: any = e.pop();
      setOpenKeys(keyStr);
    }
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
        onOpenChange={onOpenChange}
        style={{ width: 170 }}
        openKeys={[openKeys]}
        selectedKeys={[selectedKeys]}
        mode="inline"
        items={items}
      />
    </>
  );
}
