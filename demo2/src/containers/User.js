import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import './user.less'

export default class User extends Component{
    render(){
        return(
            <div>
                用户
                <div className='ldiv'>
                    <Link to="/">
                        <div>点击跳转到home</div>
                    </Link>
                    <Link to="/profile">
                        <div>点击跳转到profile</div>
                    </Link>
                </div>
            </div>
        )
    }
}