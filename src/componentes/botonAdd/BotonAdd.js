import React, {Component} from 'react';

class BotonAdd extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }
    clickBtn(){
        this.setState({
            counter: this.state.counter + 1
        });
        console.log("Counter: ", this.state.counter)
    }

    render(){
        return(
            <div>
                <button onClick={this.clickBtn.bind(this)}> Add {this.state.counter}</button>
                <h2>Counter: {this.state.counter}</h2>
            </div>
        );

    }
}
export default BotonAdd;