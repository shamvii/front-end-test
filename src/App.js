import React, { Component } from 'react';
import data from './pizza.json';
import Loading from './Loading';
import Sorting from './Sorting';

class App extends Component {
  constructor() {
super();
this.state = {
  filterString: '',
  loading: true
}
//this.testSort = this.testSort.bind(this);
  }

  // sortBy(key){
  //   this.setState({
  //     data: data.sort( (a, b) => a > b)

  //   })
  // }
  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 1500);
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({filterString: ''});
    }, 1000);
  }

  reverseAlpha(rev) {
    var sortOrder = -1;
    if(rev[0] === "-") {
        sortOrder = -1;
        rev = rev.substr(1);
    }
    return function (a,b) {
        var result = (a[rev] < b[rev]) ? -1 : (a[rev] > b[rev]) ? 1 : 0;
        return result * sortOrder;
    }
}



testSort(){
  data.sort(this.reverseAlpha("name"));
  console.log(data);
}
  

render() {
    return (
      this.state.loading ? 
      <div className="App">
        <Filter onTextChange={text => this.setState({filterString: text})} />
        <button  onClick={this.testSort()}>Sort</button>
       
  
      <ul>
        {
          data.filter(pizza => pizza.name.toLowerCase().includes(this.state.filterString.toLowerCase())
        ).map(function(pizza, i){
            return <li key={i}>  {pizza.name} </li>
          })
        }
        </ul>
        </div> : <h1> Loading.... </h1>
    );
  
  }
}

class Filter extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="filter" onKeyUp={event => this.props.onTextChange(event.target.value) }/>
      </div>

    );
  }
}


export default App;