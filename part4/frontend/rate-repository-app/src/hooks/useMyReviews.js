import { useQuery } from '@apollo/client';
import { MY_REVIEWS } from '../graphql/queries';

const useMyReviews = () => {
  const { data, ...result } = useQuery(MY_REVIEWS, {
    fetchPolicy: 'cache-and-network',
  });

  return { reviews: data ? data.me : undefined, ...result };
};

export default useMyReviews;