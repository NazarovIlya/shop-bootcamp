interface Props {
  rating: number;
}

function RatingReview(arg: Props) {
  let imgSize = 20;
  let rating = arg.rating;

  let fillRating = 0;
  let halfRating = 0;
  let emptyRating = 0;

  if (rating !== undefined && rating > 0 && rating <= 5) {
    for (let i = 0; i <= 4; i++) {
      if (rating - 1 >= 0) {
        fillRating = fillRating + 1;
        rating -= 1;
      } else if (rating === 0.5) {
        halfRating = halfRating + 1;
        rating -= 0.5;
      } else if (rating === 0) {
        emptyRating += 1;
      } else {
        break;
      }
    }
  } else {
    emptyRating = 5;
  }
}
