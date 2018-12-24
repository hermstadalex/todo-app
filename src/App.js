import React, { Component } from 'react';
import './App.css';

class TodoItem extends Component {
  render() {
      return (
      <li> {this.props.name} </li>
    );
  }
}

class ItemList extends Component {
  render () {
    let items = this.props.items;
    return (items);
  }
}

class TodoList extends Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {items: [],
                  textValue: ""
    };
  }
  
  handleChange(event) {
    this.setState({textValue: event.target.value});
    console.log(this.state);
  }
  
  handleSubmit(event) {
    this.setState((state, props) => ({
      items: state.items.concat([<TodoItem key={this.state.textValue} name={this.state.textValue}/>]),
      textValue: ""
    }));
    
    event.preventDefault();
  }
  
  render() {
    let items = this.state.items;
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter todo-item: 
            <input type="text" value={this.state.textValue} onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ItemList items={items}/>
      </div>
    )
  }
}
       
class App extends Component {
  render() {
    return (
      <TodoList/>
    );
  }
}

export default App;
