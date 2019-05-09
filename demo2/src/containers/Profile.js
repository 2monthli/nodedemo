import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import './profile.less'

export default class Profile extends Component{
    render(){
        return(
            <div>
                政策
                 <div className='ldiv'>
                    <Link to="/">
                        <div>点击跳转到home</div>
                    </Link>
                    <Link to="/user">
                        <div className='a'>点击跳转到user</div>
                    </Link>
                </div>
            </div>
        )
    }
}