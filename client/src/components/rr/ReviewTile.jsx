import React from 'react';
import styled from 'styled-components';
import exampleDataList from './exampleDataList.js';
//import StarRating from './StarRating.jsx';

const Tile = styled.div`
  /* Styles for the review tile container */
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
`;


const StarContainer = styled.div`
  display: inline-block;
  font-size: 24px;
`;

const Star = styled.span`
  color: ${({ isActive }) => (isActive ? 'gold' : 'gray')};
`;

const StarRating = ({ rating, totalStars }) => {
  return (
    <StarContainer>
      {[...Array(totalStars)].map((_, index) => {
        const isActive = index < Math.floor(rating);

        return (
          <Star
            key={index}
            isActive={isActive}
          >
            &#9733;
          </Star>
        );
      })}
    </StarContainer>
  );
};


const Summary = styled.div`
  /* Styles for the summary text */
`;

const Recommend = styled.div`
  /* Styles for the recommend status */
`;

const Body = styled.div`
  /* Styles for the review body text */
`;

const Date = styled.div`
  /* Styles for the review date */
`;

const Reviewer = styled.div`
  /* Styles for the reviewer's name */
`;

const Helpfulness = styled.div`
  /* Styles for the helpfulness count */
`;

const Photo = styled.img`
  /* Styles for the review photo */
`;


const ReviewTile = ({ review }) => {
  const {
    rating,
    summary,
    recommend,
    body,
    date,
    reviewer_name,
    helpfulness,
    photos,
  } = review;

  return (
    <Tile>
      <StarRating rating={rating} totalStars={5} />
      <Summary>{summary}</Summary>
      <Recommend>{recommend ? 'Recommended' : 'Not Recommended'}</Recommend>
      <Body>{body}</Body>
      <Date>Reviewed on {date}</Date>
      <Reviewer>{reviewer_name}</Reviewer>
      <Helpfulness>{helpfulness} people found this helpful</Helpfulness>
      {photos.map((photo) => (
        <Photo key={photo.id} src={photo.url} alt="Review Photo" />
      ))}
    </Tile>
  );
};



export default ReviewTile;