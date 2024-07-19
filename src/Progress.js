import { Row } from 'antd';
import React from 'react';
import {
    HomeOutlined,
  } from '@ant-design/icons';



const Progress = ({ loading = true, width = '100%', height = 150, text = '', iconStyle = {} }) => {
  return loading ? (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ width, height, zIndex: 9999, position: 'relative' }}
    >
      {/* <Icon type="loading" style={{ fontSize: 45, color: '#1890ff', ...iconStyle }} /> */}
      {text}
      <HomeOutlined></HomeOutlined>
    </Row>
  ) : null;
};

export default Progress;
