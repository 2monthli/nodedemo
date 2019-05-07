import React from 'react'
import ReactDom from 'react-dom'
// var React = require('react')
//推荐使用import方式(es6标准)，不推荐使用require方式（CommonJS/AMD规范）

let names = ['a', 'b', 'c']

class Dome extends React.Component {
    render() {
        return (
            <div className="">
                {names.map(function (name) {
                    return <div key={name}>hello {name}</div>
                })}
            </div>
        )
    }
}
export default Dome
ReactDom.render(<Dome />, document.getElementById("root"));


