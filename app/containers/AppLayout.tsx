import React, { ReactNode, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  SettingFilled,
  HomeOutlined,
  AppstoreFilled,
  UserOutlined
} from '@ant-design/icons';
import { useHistory } from 'react-router';
import routes from '../constants/routes.json';

type Props = {
  children: ReactNode;
};

function AppLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(true);
  const history = useHistory();

  const navigateTo = (path: string) => {
    history.push(path);
  };

  return (
    <Layout>
      <Layout.Sider
        collapsible
        collapsed={collapsed}
        style={{ backgroundColor: '#000' }}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <Menu theme="dark" mode="inline" style={{ backgroundColor: '#000' }}>
          <Menu.Item onClick={() => navigateTo(routes.HOME)}>
            <HomeOutlined />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item onClick={() => navigateTo(routes.SETTINGS)}>
            <SettingFilled />
            <span>Settings</span>
          </Menu.Item>
          <Menu.Item onClick={() => navigateTo(routes.PLAYER_INFO)}>
            <UserOutlined />
            <span>Players</span>
          </Menu.Item>
          <Menu.Item onClick={() => navigateTo(routes.UTILS)}>
            <AppstoreFilled />
            <span>Utils</span>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content>
        <div
          style={{
            height: '100vh',
            backgroundColor: '#121212',
            padding: 10
          }}
        >
          {children}
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default AppLayout;
