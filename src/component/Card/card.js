import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movieData : [],
        }
    }

    componentDidMount() {
        axios
          .get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
          .then((res) => {
              this.setState({
                  movieData: res.data.Search
              })
          })
          .catch((err) => console.log(err));
    }

    render() {
        const movieData = this.state;

        return(
            <div id="img-wrapper">
                {movieData 
                   ?  this.state.movieData.map((movie,index) => {
                       return (
                           <div className="img-title" id={"card"+index} key={index}>
                               <img
                                   className="movie-img"
                                   src={movie.Poster}
                                   alt={movie.Title}
                                />
                                <div className="hover-title">{movie.Title}</div>
                           </div>
                       )
                   })
                :""};
            </div>
        )
    }
}

export default Card;