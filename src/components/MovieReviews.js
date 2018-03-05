import React from 'react';

const MovieReviews = props => {
  const { reviews } = props;
  return (
    <div className='review-list'>
      {reviews.map(renderReview)}
    </div>
  )
}

const renderReview = ({ display_title, summary_short }) => {
  return (
    <div className='review'>
      <h1>{display_title}</h1>
      <p>{summary_short}</p>
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
