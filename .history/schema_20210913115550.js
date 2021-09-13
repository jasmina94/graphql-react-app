const axios = require('axios');

const { GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType }
    })
})

// Rocket type
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString }
    })
});


// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Root query',
    fields: () => ({
        launches: {
            type: new GraphQLList(LaunchType),
            description: 'Return all launches',
            resolve: (parent, args) => {
                return axios.get('https://api.spacexdata.com/v3/launches')
                    .then(res => res.data);
            }
        },
        launch: {
            type: LaunchType,
            description: 'Return single launch',
            args: {
                flight_number: { type: GraphQLInt }
            },
            resolve: (parent, args) => {
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                    .then(res => res.data);
            }
        },
        rockets: {
            type: new GraphQLList(RocketType),
            description: 'Return all rockets',
            resolve: (parent, args) => {
                return axios.get('https://api.spacexdata.com/v3/rockets
                ')
                        .then(res => res.data);
            }
        },
        rocket: {
            type: RocketType,
            description: 'Return single rocket',
            args: {
                flight_number: { type: GraphQLInt }
            },
            resolve: (parent, args) => {
                return axios.get(`https://api.spacexdata.com/v3/rockets/${args.flight_number}`)
                    .then(res => res.data);
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});