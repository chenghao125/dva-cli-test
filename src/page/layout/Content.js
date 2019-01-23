import React, { Component } from 'react'
import {
    Form, Icon, Input, Col,Row
} from 'antd';
import styles from './less/Content.less'

class Info extends React.Component {
    state = {
        formLayout: 'horizontal',
        expand: false,
    }

    getFields() {
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
            labelCol: { span: 6 },
            wrapperCol: { span: 18 },
        } : null;
        const children = [];
        const labelName = ['注册时间','活跃时间','注册时间','活跃时间','注册时间','活跃时间',];
        for (let i = 0; i < 6; i++) {
            children.push(
                <Col span={12} key={i}>
                    <Form.Item label={labelName[i]} {...formItemLayout}>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    </Form.Item>
                </Col>
            );
        }
        return children;
    }

    render() {
        return (
            <div style={{ padding: 15, background: '#fff', minHeight: 280,
            }}
            >
                <Form>
                    <Row gutter={24}>{this.getFields()}</Row>
                </Form>
            </div>
        )
    }
}
export default Info;
