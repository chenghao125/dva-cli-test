import React,{ Component } from 'react';
import {
    Link
} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import Info from './Content'
import styles from './less/Manage.less'

const { Header, Sider, Content } = Layout;

class Manage1 extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        // const {getRouteData} = this.props;
        // console.info(getRouteData('BasicLayout'))
        return (
            <Layout className={styles.manage}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className={styles.logo} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <Link to={`menu/user`}>nav 1</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className={styles.trigger}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{
                        margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                    }}
                    >
                        <Info></Info>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Manage1;
