import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
/*actions*/
import * as topic from 'actions/topic';

/*组件*/
import Header from 'components/Topic/Header';
import List from 'components/IndexList/List';
import {Loading} from 'components/Common/Index';


@connect(
    state => state,
    dispatch => bindActionCreators({...topic}, dispatch)
)
export default class Topic extends React.Component {
	constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        let {id} = this.props.match.params
        let {topic , getArticle} = this.props
        if(!isEmpty(topic)){
            getArticle(id)
        }

    }
    componentWillReceiveProps(newProps) {
        
    }
    handleClick() {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        // this.props.history.push('/')
    }
    render() {
        let {data} = this.props.topic.data;
        let {isFecthing} = this.props.topic;
        console.log(data)
        var createMarkup = () => {
            return {
                __html: content
            };
        }
    	return(
            <div className="main">
                <Header />
                {
                    isFecthing ? <Loading /> : !isEmpty(data) &&<div className="main">
                        <div className='main-z'>
                            <div className='markdown-body' dangerouslySetInnerHTML={{__html:data.content}}></div>
                            <div>111111111</div>
                        </div>
                    </div>
                }
            </div>
    	)
    }
}