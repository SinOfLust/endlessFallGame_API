# Guardian Angels API
## Scripts
```npm
npm start
```
or
```npm
npx nodemon index.js
```

## GraphQL API
go to http://localhost:4000/graphql and start query our API or integrate it in your front end application like as following :
### with apollo-boost
```js
import ApolloClient, { gql } from "apollo-boost"

const client = new ApolloClient({
  uri: 'http://192.168.x.xx:4000/graphql'
});

client.query({
    query: gql`
        {
          account(_id: "5ca4bbc7a2dd94ee58162a49") {
            _id
            account_id
            limit
            products
          }
        }
      `
    })
    .then(result => console.log(result));
```
### with javascript fetch
```js
fetch('http://192.168.x.xx:4000/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
      body: JSON.stringify({query: "{ getSkins }"})
    })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));
```