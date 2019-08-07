import React, { Component } from 'react';
import Movies from '../Movie/Movies';

class Table extends Component{
      
    render () {
  
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <tr>
                        Showing {this.props.counter} movies in the database.
                            </tr>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody id="table_data">
                    {this.props.movies.map(movie =>{ 
                        return (
                                <Movies movie={movie}  handleDelete={this.props.handleDelete} handleLike={this.props.handleLike}/>
                                    );
                                    })}
                    </tbody>
                </table>
            </div>
        ) ;
    }
}

export default Table;