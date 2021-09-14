# Space Launch Stats

## _React, GraphQL, Apollo app that uses the SpaceX API to display launches_

# Install dependencies (server & client)

npm install
cd client && npm install

# Run server & client (:3000 & :5000)

npm run dev

# Server only (:5000)

npm run server

# Client only (:3000)

npm run client

# Build for production (Builds into server ./public)

cd client && npm run build

# Graphiql - http://localhost:5000/graphql

# Heroku deployment

-   heroku login
-   heroku create
-   heroku git:remote -a [name_of_the_app]
-   git add .
-   git commit -m '[message]'
-   git push heroku master

# Reference

Brad Traversy [Traversy Media](https://www.traversymedia.com/)
