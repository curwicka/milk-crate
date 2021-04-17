import React, { useEffect, useState } from "react";
import Review from "./Review";

function Reviews() {
	const [reviews, setReviews] = useState([])

	useEffect(() => {
		fetch('../reviews.json')
			.then((response) => response.json())
			.then((data) => {
				setReviews(data)
			})
	}, [])

  return (
		<div>
			{reviews.map((review) => (
				<li>
          <Review title={review.title} artist={review.artist} review={review.review} maxLength={review.maxLength} link={review.link} />
				</li>
			))}
		</div>
	)
}

/*<h2>{review.artist} - {review.title}</h2>
<p>{review.review}</p>*/

export default Reviews;
