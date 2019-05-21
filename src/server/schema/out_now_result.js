const { GraphQLJSONObject } = require('graphql-type-json');
const {
  GraphQLObjectType,
  GraphQLString,
} = require("graphql");

const OutNowResult = new GraphQLObjectType({
  name: "OutNowResult",
  fields: {
    everything: {
      type: GraphQLJSONObject,
      resolve: (result) => result,
    }
    }
});

module.exports = OutNowResult;