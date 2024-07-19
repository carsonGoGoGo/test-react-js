import React from "react";

import { Col, Menu, Row, Tooltip, Button } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { SettingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  //   const navigate = useNavigate();
  return (
    <div>
      <Row type="flex" align="middle">
        <Col>
          <Menu mode="inline">
            <SubMenu title="导航一" style={{ width: 240 }}>
              <Menu.Item icon={<SettingOutlined />}>选项一</Menu.Item>
              <Menu.Item>选项二</Menu.Item>
              <Menu.Item>选项三</Menu.Item>
            </SubMenu>

            <Menu.Item>项目2</Menu.Item>
            <Menu.Item>项目3</Menu.Item>

            <SubMenu title="导航四">
              <Menu.Item>项目12</Menu.Item>
              <Menu.Item>项目34</Menu.Item>
              <Menu.Item>项目56</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
        <Col>
          <Tooltip title="提示">
            <Button
              icon="arrow-left"
              type="link"   
              style={{ fontSize: 16, color: "rgba(0,0,0,.85)" }}
            >
              点击我
            </Button>
          </Tooltip>
        </Col>

        <Col>
        <Tooltip title="刷新">
          <Button
            icon="redo"
            type="link"
            // onClick={onRedo}
            style={{ fontSize: 16, color: 'rgba(0,0,0,.85)' }}
          />
        </Tooltip>
      </Col>
      </Row>
    </div>
  );
};

export default Layout;
