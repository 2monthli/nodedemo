import React, { Component } from 'react'
import './home.less'
import { Link } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div style={{
                width: '200px',
                height: '80px',
                backgroundColor: 'yellow',
                fontSize: '24px',
                textAlign: 'center'
            }}
            >
                首页
            <div className='ldiv'>
                    <Link to="/profile">
                        <div>点击跳转到profile</div>
                    </Link>
                    <Link to="/user">
                        <div>点击跳转到user</div>
                    </Link>
            </div>
            </div>


        )
    }
}