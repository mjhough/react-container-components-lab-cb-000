import React, { Component } from 'react';
import SearchBar from './searchBar';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'cad8c3b16a694c63b3e1fd068531eea3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }
  handleChange(ev) {
    const search = ev.target.value;
    document.getElementsByClassName('latest-movie-reviews')[0].classList.add('hidden');
    fetch(URL + search)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }))
  } 
  render() {
    const { search, reviews } = this.state;
    return (
      <div className='searchable-movie-reviews'>
        <SearchBar search={search} onChange={this.handleChange.bind(this)} />
        <MovieReviews reviews={reviews} />
      </div>
    )
  }
}
