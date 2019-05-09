import React from 'react';
import { Segment } from 'semantic-ui-react';

class Page3 extends React.Component{
    render(){
            return(
                <div>
                    <Segment 
                        style={{
                            textAlign:'center',width:'60%',margin:'10px auto'
                        }}>
                        文章三——永遇乐
                    </Segment>
                    <Segment 
                        style={{
                            textAlign:'center',margin:'10px auto'
                        }}>
                        千古江山，英雄无觅孙仲谋处。<br/>
                        舞榭歌台，风流总被雨打风吹去。<br/>
                        斜阳草树，寻常巷陌，人道寄奴曾住。<br/>
                        想当年，金戈铁马，气吞万里如虎。<br/>
                        元嘉草草，封狼居胥，赢得仓皇北顾。<br/>
                        四十三年，望中犹记，烽火扬州路。<br/>
                        可堪回首，佛狸祠下，一片神鸦社鼓。<br/>
                        凭谁问，廉颇老矣，尚能饭否？ <br/>
                    </Segment>
                </div>
            );
        }
}

export default Page3;
