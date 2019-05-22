const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const { GraphQLJSONObject } = require('graphql-type-json');

require('dotenv').config();

const fetch = require("node-fetch");
const SearchType = require("./search_type");
const MovieType = require("./movie_type");
const OutNowType = require("./out_now_result");

const omdbApiKey = process.env.OMDB_API_KEY;
const tmdbApiKey = process.env.TMDB_API_KEY;

const omdbUrl = `http://www.omdbapi.com/?apikey=${omdbApiKey}`;
const tmdbUrl = `https://api.themoviedb.org/3/movie/`
const tmdbEndpoint = `/?api_key=${tmdbApiKey}&language=en-US&page=1&region=US`;

function fetchSearch(searchTerm) {
  return fetch(`${omdbUrl}&s=${searchTerm}`).then(res => {
    return res.json();
  });
}

function fetchMovie(id) {
  return fetch(`${omdbUrl}&i=${id}`).then(res => {
    return res.json();
  });
}

function fetchPosters(current) {
  return fetch(`${tmdbUrl}${current}${tmdbEndpoint}`).then(res=> {
    return res.json();
  })
}

const TmdbType = new GraphQLObjectType({
  name: 'TmdbType',
  fields: {
    results: {
      type: GraphQLList(new GraphQLObjectType({
        name: 'TmdbResult',
        fields: {
          id: {
            type: GraphQLInt,
            resolve: (res) => res.id
          },
          title: {
            type: GraphQLString,
            resolve: (res) => res.title
          },
          poster: {
            type: GraphQLString,
            resolve: (res) => res.poster_path
          },
        }
      }))
    }
  }
})

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    search: {
      type: SearchType,
      args: {
        searchTerm: { type: GraphQLString },  
        // more...
      },
      resolve: (root, args) => fetchSearch(args.searchTerm),
    },
    movie: {
      type: MovieType,
      args: {
        id: { type: GraphQLString },
        // more...
      },
      resolve: (root, args) => fetchMovie(args.id),
    },
    getPosters: {
      type: TmdbType,
      args: {
        current: { type: GraphQLString },
      },
      resolve: (root, args) => fetchPosters(args.current)
    }
  }
});

const omdbSchema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = omdbSchema;
