import React, { Component } from 'react';
import './Movies.css';
import { Button, Col, Row, Container } from 'reactstrap';

const Movies = (props) => {
    let heart = <i class="heart fa fa-heart-o" aria-hidden="false"></i>;
    if (props.movie.liked === true){
        heart = <i class="heart fa fa-heart" aria-hidden="true"></i>;
    }
    return (
        <tr>
            <td>{props.movie.title}</td>
            <td>{props.movie.genre.name}</td>
            <td>{props.movie.numberInStock}</td>
            <td>{props.movie.dailyRentalRate}</td>
            <td><Button className="btn btn-primary-outline" Background="Transparent" onClick={props.handleLike(props.movie._id)}>{heart}</Button></td>
            <td><Button className="btn btn-danger" onClick={props.handleDelete(props.movie._id)}>Delete</Button></td>
            </tr>
             )
}

export default Movies;

