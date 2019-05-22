const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString
} = require("graphql");

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
  });

  module.exports = TmdbType;
