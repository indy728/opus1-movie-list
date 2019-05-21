const OutNowResult = require("./out_now_result");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const OutNowType = new GraphQLObjectType({
  name: "OutNowType",
  fields: {
    totalResults: {
      type: GraphQLInt,
      resolve: (result) => result.totalResults,
    },
    movies: {
      type: GraphQLList(OutNowResult),
      resolve: (result) => result.Search,
    }
  },
});

module.exports = OutNowType;