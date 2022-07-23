# MERN APP build process



# Back end



## File Cleaning

1.change the require method to import method

2.Add the doc folder: include the post man visit method

## Process:

1.change the type to module

2.change the index.js (route all), routes,other 

## [__dirname is not defined in Node 14 version](https://stackoverflow.com/questions/64383909/dirname-is-not-defined-in-node-14-version)

```javascript
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```



3.when you write the test file, with the postman, then export it(back)

3.1build a folder doc, include the postman folder and the UI folder(UI folder in the client), and README.md for the back end only





## MERN(Base Project)

1.Social Media Project

2.Restaurant review(Dao concept)

3.Memories

# Process

1.build the back end:

**Mongoose:**

Model --> conttroler -- > routes

**Mongodb:**



DAO(Data as an Object):mongodb database process --> conttroler:send the data back the front end (restaurants.route.js)-- > routes

[[How the DAOs objects works if they never get instantiated?](https://www.mongodb.com/community/forums/t/how-the-daos-objects-works-if-they-never-get-instantiated/93422)]



2.build the front end 

3.axios and fetch use the back end data



## Source Code And Demo

[support-desk](https://github.com/bradtraversy/support-desk)



## Udemy Project:

Feed Back (Pure UI)

Github API(third Party API)

House Project(Fire Base)

MERN Ticket System Project(mongoose package)

## Run the project:
1.back end: You need to cd to the api directory and run it by the code below:
```
cd backend
yarn start
```
2.Front end: You need to cd to the client directory and run it by the code below:
```
cd client
yarn start
```

## Node API
[Node API](https://gist.github.com/GlennOu66304/1f20786073a5429cb8f53faeb5cdb09d). 

## React Front end
[React Front end](https://gist.github.com/GlennOu66304/e1e9fe6fddd8a8a726781d0b31e84a2c).  
[React.md](https://gist.github.com/GlennOu66304/e1e9fe6fddd8a8a726781d0b31e84a2c). 
## Render the Data into the Front
[Render the data into the front end.md](https://gist.github.com/GlennOu66304/af012b81e49fc41d1163f00865f97366). 

## Reference
[Reference](https://github.com/GlennOu66304/Social_app/blob/main/client/README.md)
