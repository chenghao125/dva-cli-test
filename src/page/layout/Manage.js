import React,{ Component } from 'react';
import {Layout,Menu, Icon} from 'antd';
import Header from './Header'
import LeftSlide from './LeftSlide'
import styles from './less/Manage.less'


class Manage extends React.Component {
    state = {
    }
    render(){
        return(
            <Layout className={styles.manage}>
                <LeftSlide/>
                <Layout>
                    <Header/>
                </Layout>

            </Layout>
        )
    }
}
export default Manage;
