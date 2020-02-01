# Guardian Angels API

### Scripts
dev
```npm
npm start
```
debug
```npm
npm run debug
```
test
```npm
npm run test
```
build
```npm
npm run build
```
lint
```npm
npm run lint
```

# Get Started
```
git clone https://github.com/loydfassi/endlessFallGame_API.git && cd endlessFallGame_API && npm i
touch .env
```
edit the .env config file as following : 
```
DB_HOST_ATLAS=yourDBaccount
DB_NAME=yourDBname
DB_PASSWORD=yourDBpassword
DB_ADRESS=yourMongoclusterAdress
NODE_ENV=development
DOMAIN=localhost
PORT=4000
```
and finally
```
npm start
```

now go to http://localhost:4000/graphql and start query our API or integrate it in your front end application like as following 

### with apollo-boost
```js
import ApolloClient, { gql } from "apollo-boost"

const client = new ApolloClient({
  uri: 'http://192.168.x.xx:4000/graphql'
});

client.query({query: gql`
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
fetch('http://192.168.x.xx:4000/graphql', {method: 'POST', headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query:`
      mutation getSkins{
        getSkins(category: "skinsCharacter")
      }`)
      })
      .then(r => r.json())
      .then(data => console.log('data returned:', data));
```
