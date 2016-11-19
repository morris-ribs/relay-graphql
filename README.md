# relay-graphql

This project is based on https://github.com/relayjs/relay-starter-kit

This is a GraphQL server, coded in NodeJs, that makes queries to retrieves data from a MongoDB instance.

The client queries the data via Relay: https://facebook.github.io/relay/

# 1) Launch mongo daemon!

After installing your MongoDB instance, open a cmd window and run the following command:
```
# launch mongo daemon
$ mongod
```

Your MongoDB instance is up and ready to treat your requests!

# 2) Insert dummy data

Launch Mongo client
```
$ mongo
```

Then, create a DB **dbdrinks**

```
$ use dbdrinks
```

Finally, paste the contents of https://github.com/morris-ribs/rest-go/blob/master/mongo_insert.txt


# 3) Run the server

In the root folder of the project, run
```
$ npm install
$ npm start
```

It is going to start the server on the port 8080; and the client on port 3000

Open http://localhost:3000/

# Next steps (TODO)

Use Relay to call the mutations to manage data.
