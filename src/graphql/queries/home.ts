import { gql } from '@apollo/client';
import { BannerFragment } from 'graphql/fragments/banner';
import { GameFragment } from 'graphql/fragments/game';

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }
    newGames: games(
      where: { release_date_lte: "2023-01-01" }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }
  }

  ${BannerFragment}
  ${GameFragment}
`;
