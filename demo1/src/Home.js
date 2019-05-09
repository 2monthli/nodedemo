import React from 'react';
import { Link } from 'react-router-dom';

import { Segment, Menu, Image } from 'semantic-ui-react';

class Home extends React.Component{
    render(){
            return(
                <div>
                    {/* <Segment><div>This is Home!</div></Segment> */}
                    <Image rounded src={require('./img/123.jpg')}/>
                    <Menu>
                    <Menu.Item>
                        <Link to="/Page1/" style={{color:'black'}}>
                            <div>点击跳转到Page1</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/Page2/" style={{color:'black'}}>
                            <div>点击跳转到Page2</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/Page3/" style={{color:'black'}}>
                            <div>点击跳转到Page3</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/Login/" style={{color:'black'}}>
                            <div>登录</div>
                        </Link>
                    </Menu.Item>
                    </Menu>
                           
                </div>
            );
        }
}

export default Home;
