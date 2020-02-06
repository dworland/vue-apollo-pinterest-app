const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// Import typeDefs and resolvers from respected files
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

// Import environement variables and mongoose models
require("dotenv").config({ path: "variables.env" });
const User = require("./models/User");
const Post = require("./models/Post");

// Connect to Mongo DB
mongoose
    .connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log("DB connected"))
    .catch(err => console.error(err));

// Create Apollo/GraphQL server using typeDefs, resolvers, and context object
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        User,
        Post
    }
});

server.listen().then(({ url }) => {
    console.log(`Server listening on ${url}`);
});
