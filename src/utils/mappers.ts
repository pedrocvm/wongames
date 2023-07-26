import { QueryGames_games } from 'graphql/generated/QueryGames';
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome';

export const bannersMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: banner.image?.url,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  }));
};

export const gamesMapper = (games: QueryGames_games[] | null | undefined) => {
  return (
    games &&
    games.map((game) => ({
      title: game.name,
      slug: game.slug,
      developer: game.developers[0].name,
      img: game.cover
        ? game.cover.url
        : 'https://bitsofco.de/content/images/2018/12/broken-1.png',
      price: game.price
    }))
  );
};

export const highlightsMapper = (
  highlights: QueryHome_sections_freeGames_highlight | null | undefined
) => {
  return (
    highlights && {
      title: highlights.title,
      subtitle: highlights.subtitle,
      buttonLabel: highlights.buttonLabel,
      buttonLink: highlights.buttonLink,
      backgroundImage: highlights.background?.url,
      floatImage: highlights.floatImage?.url,
      alignment: highlights.alignment
    }
  );
};
