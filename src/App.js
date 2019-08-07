import React, { Component } from 'react';
import './App.css';
import Table from './Table/Table';
import * as data from './services/fakeMovieService';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 9,
        movies:[]
        };
    }
    componentDidMount(){
      const array = [...data.getMovies()];
      for (let i =0; i<array.length; i++){
          array[i].liked = false;
      }
    this.setState({movies: array});
    }

    handleDelete = (id) => (event) => {
      event.preventDefault();
      const array = this.state.movies;
      const filtered = array.filter(function(obj){
        return obj._id !== id;
      });
      this.setState({movies:filtered});
      let counter2 = this.state.counter;
      counter2 -= 1;
      this.setState({counter: counter2}); 
    }
    handleLike =(id) => (event)=>{
        event.preventDefault();
        const array = [...this.state.movies];
        const index = array.findIndex(ele => ele._id === id)
        array[index].liked= !array[index].liked;
        this.setState({movies: array});    
    }
  render() {
    return (
      <div className="App">
     <Table counter={this.state.counter} movies={this.state.movies} handleDelete={this.handleDelete} handleLike={this.handleLike}/>
      </div>
    );
  }
}

export default App;
