import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (order, search) => {
  const { data, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: order.sort,
      orderDirection: order.orderby,
      searchKeyword: search
    }
  });

  return { repositories: data ? data.repositories : undefined, ...result };
};

export default useRepositories;