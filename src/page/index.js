import React,{ Component } from 'react';
import { Table,Button, Divider, Tag } from 'antd';
import { connect } from 'dva';

@connect(({ index }) => ({
    index
}))

class Index extends Component{
    state = {
        value1:this.props.index.list,
        list:[]
    }
    componentDidMount(){
        // const { index } = this.props;
        // this.setState({
        //     list:this.props.index.list
        // })
        // console.info(this.state.list)
        const {dispatch,index} = this.props;
        dispatch({
            type: 'index/getUser',
            payload:index
        });
    }
    getUsers(){
        const {dispatch,index} = this.props;
        dispatch({
            type: 'index/getUser',
            payload:index
        });
    }
    render(){
        const {value1} = this.state.list;
        const columns = [
            {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: name => (
                <span>{name == null ? '-' : name}</span>
            ),
            align: 'center'
        }, {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
            align: 'center'
        }, {
            title: '邀请人',
            dataIndex: 'iuName',
            key: 'iuName',
        }, {
            title: '注册时间',
            dataIndex: 'createTime',
            key: 'createTime',
        }, {
            title: '身份审核状态',
            dataIndex: 'status',
            key: 'status',
        }, {
            title: '技能审核状态',
            dataIndex: 'serviceStatus',
            key: 'serviceStatus',
        }, {
            title: '操作',
            dataIndex: '',
            key: '',
        }];
        return(
            <div>
                <Button type="primary" onClick={()=>this.getUsers()}>掉接口</Button>
                <Table align={'center'} dataSource={this.props.index.list} columns={columns} />
            </div>
        )
    }
}

function mapStateToProps({index}) {
    return {index};
}
// export default connect(mapStateToProps)(Index);
export default Index;
