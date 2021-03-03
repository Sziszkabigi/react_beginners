import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
        imageUrl: 'https://res.cloudinary.com/dleicsu2y/image/upload/v1601466525/MYWEB/marcus-carlsson-vlLH_kn-_h8-unsplash_uorvty.jpg',
        tags: ['tag1', 'tag2','tag3']
    };
    
    styles ={
        fontSize :20,
        fontWeight: "bold" 
    };

    handleIncrement = () => {
        this.setState({count:this.state.count + 1})
    };

    render() { 
        return (
            <React.Fragment>
                <span style={this.styles} className={this.getBadgeClasses()}> counter</span>
                <img style={{width:200}} src= {this.state.imageUrl} alt = ""/>
                <span > {this.formatCount()} </span>
                <button onClick={this.handleIncrement} > Increment </button>
                <ul>
                    { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
                </ul>
            </React.Fragment>
        ); 
    } 

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes; 
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Counter;