const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require("graphql");

require('dotenv').config();

const fetch = require("node-fetch");

const SearchType = require("./search_type");
const TmdbType = require("./tmdb_type");

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

function fetchPosters(current) {
  return fetch(`${tmdbUrl}${current}${tmdbEndpoint}`).then(res=> {
    return res.json();
  })
}

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
