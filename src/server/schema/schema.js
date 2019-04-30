const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
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
    searchMany: {
      type: SearchType,
      args: {
        input: { type: GraphQLList(GraphQLString) },  
      },
      resolve: async (root, { input }) => {
        const promises = input.map(title => {
          const response = fetchSearch(title);
            // console.log(response);
            return response;
          });
  
          // console.log(promises);
          const results = await Promise.all(promises)
          console.log(results);
          return results;
        }
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
