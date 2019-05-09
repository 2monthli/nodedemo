import React from 'react';
import { Segment } from 'semantic-ui-react';

class Page2 extends React.Component{
    render(){
            return(
                <div>
                    <Segment 
                        style={{
                            textAlign:'center',width:'60%',margin:'10px auto'
                        }}>
                        文章二——水调歌头
                    </Segment>
                    <Segment 
                        style={{
                            textAlign:'center',margin:'10px auto'
                        }}>
                        明月几时有，把酒问青天。<br/>
                        不知天上宫阙，今夕是何年。<br/>
                        我欲乘风归去，又恐琼楼玉宇，高处不胜寒。<br/>
                        起舞弄清影，何似在人间。<br/>
                        转朱阁，低绮户，照无眠。<br/>
                        不应有恨，何事长向别时圆？<br/>
                        人有悲欢离合，月有阴晴圆缺，此事古难全。<br/>
                        但愿人长久，千里共婵娟。
                    </Segment>
                </div>
            );
        }
}

export default Page2;
