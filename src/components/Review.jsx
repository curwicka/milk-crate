import React, { useState } from 'react';

function Review({ title, artist, review, maxLength, link }) {

  const [hidden, setHidden] = useState(true);
  const fullReview = <span><p>{review}</p><p><a href={link}>Read the full review here!</a></p></span>;

  if (review.length <= maxLength) {
    return
      <div className="review-card">
        <h2>{artist} - {title}</h2>
        <p>{fullReview}</p>
      </div>;
  }

  return (
    <div className="review-card">
      <h2>{artist} - {title}</h2>
      {hidden ? `${review.substr(0, maxLength).trim()} ...` : fullReview}
      {hidden ? (
        <a onClick={() => setHidden(false)}> <strong>read more</strong></a>
      ) : (
        <a onClick={() => setHidden(true)}> read less</a>
      )}

    </div>
  );
}

export default Review;
