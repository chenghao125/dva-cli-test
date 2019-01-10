import React,{ Component } from 'react';
import { connect } from 'dva';

class Index extends Component{
    state = {
        data:'',
        value1:123123
    }
    componentDidMount(){
        const { index } = this.props;
        console.info(this.props);
        console.info(index);
    }
    render(){
        const {value1} = this.state;
        return(
            <div>
                1111
                <div>{value1}</div>
            </div>
        )
    }
}

function mapStateToProps({index}) {
    return {index};
}
export default connect(mapStateToProps)(Index);
// export default Index;
