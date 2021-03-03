import React, { Component } from 'react';

class Counter extends Component {
  state = { 
    count:this.props.counter.value,
    imageUrl: 'https://res.cloudinary.com/dleicsu2y/image/upload/v1601466525/MYWEB/marcus-carlsson-vlLH_kn-_h8-unsplash_uorvty.jpg',
    tags: ['tag1', 'tag2','tag3']
};
    
  styles ={
    fontSize :20,
    ontWeight: "bold" 
  };
    /* constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
        we can use this constructor and after we need to use it.... the easier way whatr I used below => function
    } */
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }; 

  render() {   
    return (
      <React.Fragment>
        {this.props.children}
        <span style = {this.styles} > counter </span> 
        <span>  </span>
        <span className={this.getBadgeClasses()}> 
          {this.formatCount()}
        </span>
        <button 
          onClick= {this.handleIncrement} 
          className ="btn btn-secondary btn -sm">
            Increment 
        </button>
				
        <button
        	onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
				>
          Delete 
        </button>

        <img style ={{width:200}} src= {this.state.imageUrl} alt = ""/>
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
    return count === 0 ?  "Zero" : count;
    }
}

export default Counter;