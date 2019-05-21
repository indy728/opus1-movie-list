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

const omdbUrl = `http://www.omdbapi.com/?apikey=${omdbApiKey}`;
const moviegluUrl = `https://api-gate2.movieglu.com/`;

const gluHeaders = {
  "client": process.env.MG_USERNAME,
  "x-api-key": process.env.MG_API_KEY,
  "authorization": process.env.MG_AUTHORIZATION,
  "api-version": "v200",
  "territory": process.env.MG_TERRITORY,
  "device-datetime": "2019-05-12T08:30:17.360Z"
}

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

function fetchOutNow(n) {
  return fetch(`${moviegluUrl}filmsNowShowing/?n=${n}`, { method: 'GET', headers: gluHeaders}).then(res=> {
    return res.json();
  })
}

function fetchComingSoon(n) {
  return fetch(`${moviegluUrl}filmsComingSoon/?n=${n}`, { method: 'GET', headers: gluHeaders}).then(res=> {
    return res.json();
  })
}

const GluType = new GraphQLObjectType({
  name: 'GluType',
  fields: {
    films: { 
      type: GraphQLList(new GraphQLObjectType({
        name: "GluResult",
        fields: {
          everything: {
            type: GraphQLJSONObject,
            resolve: (result) => result
          },
          title: {
            type: GraphQLString,
            resolve: (result) => result.film_name
          },
          releaseDate: {
            type: GraphQLString,
            resolve: (result) => result.release_dates[0].release_date
          },
          poster: {
            type: GraphQLJSONObject,
            resolve: (res) => res.images
          }
        }
      })),
      resolve: (result) => result.films
    },
    imdbID: { 
      type: GraphQLString,
    },
    releaseDate: { 
      type: GraphQLString,
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
    gluOutNow: {
      type: GluType,
      args: {
        n: { type: GraphQLInt }
      },
      resolve: (root, args) => fetchOutNow(args.n)
    },
    gluComingSoon: {
      type: GluType,
      args: {
        n: { type: GraphQLInt }
      },
      resolve: (root, args) => fetchComingSoon(args.n)
    },
  },
});

const omdbSchema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = omdbSchema;
