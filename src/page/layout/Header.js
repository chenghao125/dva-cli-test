import React,{ Component } from 'react';
import { Icon } from 'antd';
import styles from './less/Header.less'

class Header extends React.Component{
    state = {

    }
    render(){
        return(
            <div style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <div className={styles.fixedHeader}>Header</div>
            </div>
        )
    }
}
export default Header;
