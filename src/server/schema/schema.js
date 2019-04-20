const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

require('dotenv').config();

const fetch = require("node-fetch");
const SearchType = require("./search_type");
const MovieType = require("./movie_type");

const apiKey = process.env.OMDB_API_KEY;

const url = `http://www.omdbapi.com/?apikey=${apiKey}`;

function fetchSearch(searchTerm) {
  return fetch(`${url}&s=${searchTerm}`).then(res => {
    return res.json();
  });
}

function fetchMovie(id) {
  return fetch(`${url}&i=${id}`).then(res => {
    return res.json();
  });
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
    searchYear: {
      type: SearchType,
      args: {
        searchTerm: { type: GraphQLString,
                      year: GraphQLInt},
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
  },
});

const omdbSchema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = omdbSchema;
