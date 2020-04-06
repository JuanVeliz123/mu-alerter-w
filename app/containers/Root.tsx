import React from 'react';
import { hot } from 'react-hot-loader/root';
import { MemoryRouter } from 'react-router-dom';
import Routes from '../Routes';
import 'antd/dist/antd.css';

const Root = () => (
  <MemoryRouter>
    <Routes />
  </MemoryRouter>
);

export default hot(Root);
