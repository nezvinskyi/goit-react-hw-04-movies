import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import api from '../services/movies-api';
import MovieContainer from '../components/MovieContainer';
import InfoContainer from '../components/InfoContainer';

class MovieDetailsView extends Component {
  state = {
    movie: {},
    cast: [],
    reviews: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const movie = await api.fetchById(movieId);
    const cast = await api.fetchCast(movieId);
    const reviews = await api.fetchReviews(movieId);
    this.setState({ movie, cast, reviews });
  }
  render() {
    const {
      backdrop_path,
      id,
      original_title,
      vote_average,
      overview,
      genres,
    } = this.state.movie;
    return (
      <>
        <Link to="">Go back</Link>
        <h1>movie details</h1>
        {id && (
          <MovieContainer
            backdrop_path={backdrop_path}
            id={id}
            original_title={original_title}
            vote_average={vote_average}
            overview={overview}
            genres={genres}
          />
        )}

        {id && (
          <Route
            path={this.props.match.path}
            render={props => {
              return (
                <InfoContainer
                  {...props}
                  cast={this.state.cast}
                  reviews={this.state.reviews}
                />
              );
            }}
          />
        )}
      </>
    );
  }
}

export default MovieDetailsView;
