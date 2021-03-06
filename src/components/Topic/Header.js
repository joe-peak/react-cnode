import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
//action
import * as indexList from 'actions/indexList';


export default class Header extends React.Component {
	constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        //组件挂载前触发此函数
    }
    componentWillReceiveProps(newProps) {
        //props改变触发此函数
    }
    handleClick() {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        // this.props.history.push('/')
        history.go(-1);
    }
    render() {
    	return(
            <div className="top">
                <div className="fanhui" onClick={this.handleClick}>
                    <i className="iconfont icon-fanhui"></i>
                </div>
                <div className="title">详情</div>
            </div>     
    	)
    }
}