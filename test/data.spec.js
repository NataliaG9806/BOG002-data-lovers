import {  filterData, sortData, computeStats} from '../src/data.js';
import data from '../src/data/rickandmorty/rickandmorty.js';

const calcule ={Dead: "20.00", unknown: "20.00", Alive: "60.00"};
const calculeAlive ={Dead: 0, unknown: 0, Alive: "100.00"};
const calculeDead ={Dead: "100.00", unknown: 0, Alive: 0};
const calculeUnknown ={Dead: 0, unknown: "100.00", Alive: 0};
const charactersAlive =[{
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31"
  ],
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": "2017-11-04T18:48:46.250Z"
},
{
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31"
  ],
  "url": "https://rickandmortyapi.com/api/character/2",
  "created": "2017-11-04T18:50:21.651Z"
},
{
  "id": 3,
  "name": "Summer Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
  "origin": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31"
  ],
  "url": "https://rickandmortyapi.com/api/character/3",
  "created": "2017-11-04T19:09:56.428Z"
}]
const charactersDead = [{
  "id": 8,
  "name": "Adjudicator Rick",
  "status": "Dead",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
      "name": "unknown",
      "url": ""
  },
  "location": {
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/8.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/28"
  ],
  "url": "https://rickandmortyapi.com/api/character/8",
  "created": "2017-11-04T20:03:34.737Z"
},
{
  "id": 9,
  "name": "Agency Director",
  "status": "Dead",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/9.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/24"
  ],
  "url": "https://rickandmortyapi.com/api/character/9",
  "created": "2017-11-04T20:06:54.976Z"
},
{
  "id": 10,
  "name": "Alan Rails",
  "status": "Dead",
  "species": "Human",
  "type": "Superhuman (Ghost trains summoner)",
  "gender": "Male",
  "origin": {
      "name": "unknown",
      "url": ""
  },
  "location": {
      "name": "Worldender's lair",
      "url": "https://rickandmortyapi.com/api/location/4"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/10.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/25"
  ],
  "url": "https://rickandmortyapi.com/api/character/10",
  "created": "2017-11-04T20:19:09.017Z"
}]
const charactersUnknown = [{
  "id": 13,
  "name": "Alien Googah",
  "status": "unknown",
  "species": "Alien",
  "type": "",
  "gender": "unknown",
  "origin": {
      "name": "unknown",
      "url": ""
  },
  "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/13.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/31"
  ],
  "url": "https://rickandmortyapi.com/api/character/13",
  "created": "2017-11-04T20:33:30.779Z"
},
{
  "id": 14,
  "name": "Alien Morty",
  "status": "unknown",
  "species": "Alien",
  "type": "",
  "gender": "Male",
  "origin": {
      "name": "unknown",
      "url": ""
  },
  "location": {
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/14.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/10"
  ],
  "url": "https://rickandmortyapi.com/api/character/14",
  "created": "2017-11-04T20:51:31.373Z"
},
{
  "id": 15,
  "name": "Alien Rick",
  "status": "unknown",
  "species": "Alien",
  "type": "",
  "gender": "Male",
  "origin": {
      "name": "unknown",
      "url": ""
  },
  "location": {
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/15.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/10"
  ],
  "url": "https://rickandmortyapi.com/api/character/15",
  "created": "2017-11-04T20:56:13.215Z"
}]
const characters = data.results;
let reverse =[{
  "id": 313,
  "name": "Shleemypants",
  "status": "Alive",
  "species": "unknown",
  "type": "Omniscient being",
  "gender": "Male",
  "origin": {
      "name": "unknown",
      "url": ""
  },
  "location": {
      "name": "unknown",
      "url": ""
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/313.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/12"
  ],
  "url": "https://rickandmortyapi.com/api/character/313",
  "created": "2018-01-05T14:52:31.489Z"
},{
  "id": 266,
  "name": "Piece of Toast",
  "status": "Alive",
  "species": "unknown",
  "type": "Bread",
  "gender": "Genderless",
  "origin": {
      "name": "unknown",
      "url": ""
  },
  "location": {
      "name": "Interdimensional Cable",
      "url": "https://rickandmortyapi.com/api/location/6"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/266.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/17"
  ],
  "url": "https://rickandmortyapi.com/api/character/266",
  "created": "2017-12-31T13:48:58.850Z"
},{
  "id": 265,
  "name": "Pickle Rick",
  "status": "Alive",
  "species": "unknown",
  "type": "Pickle",
  "gender": "Male",
  "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/265.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/24"
  ],
  "url": "https://rickandmortyapi.com/api/character/265",
  "created": "2017-12-31T13:47:10.617Z"
},{
  "id": 157,
  "name": "Hole in the Wall Where the Men Can See it All",
  "status": "unknown",
  "species": "unknown",
  "type": "Hole",
  "gender": "Genderless",
  "origin": {
      "name": "unknown",
      "url": ""
  },
  "location": {
      "name": "Interdimensional Cable",
      "url": "https://rickandmortyapi.com/api/location/6"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/157.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/8"
  ],
  "url": "https://rickandmortyapi.com/api/character/157",
  "created": "2017-12-29T15:47:57.352Z"
},{
  id: 25,
  name: 'Armothy',
  status: 'Dead',
  species: 'unknown',
  type: 'Self-aware arm',
  gender: 'Male',
  origin: {
    name: 'Post-Apocalyptic Earth',
    url: 'https://rickandmortyapi.com/api/location/8'
  },
  location: {
    name: 'Post-Apocalyptic Earth',
    url: 'https://rickandmortyapi.com/api/location/8'
  },
  image: 'https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/25.jpeg',
  episode: [ 'https://rickandmortyapi.com/api/episode/23' ],
  url: 'https://rickandmortyapi.com/api/character/25',
  created: '2017-11-05T08:54:29.343Z'
}];
const unknown = [{
  id: 25,
  name: 'Armothy',
  status: 'Dead',
  species: 'unknown',
  type: 'Self-aware arm',
  gender: 'Male',
  origin: {
    name: 'Post-Apocalyptic Earth',
    url: 'https://rickandmortyapi.com/api/location/8'
  },
  location: {
    name: 'Post-Apocalyptic Earth',
    url: 'https://rickandmortyapi.com/api/location/8'
  },
  image: 'https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/25.jpeg',
  episode: [ 'https://rickandmortyapi.com/api/episode/23' ],
  url: 'https://rickandmortyapi.com/api/character/25',
  created: '2017-11-05T08:54:29.343Z'
},{
  "id": 157,
  "name": "Hole in the Wall Where the Men Can See it All",
  "status": "unknown",
  "species": "unknown",
  "type": "Hole",
  "gender": "Genderless",
  "origin": {
      "name": "unknown",
      "url": ""
  },
  "location": {
      "name": "Interdimensional Cable",
      "url": "https://rickandmortyapi.com/api/location/6"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/157.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/8"
  ],
  "url": "https://rickandmortyapi.com/api/character/157",
  "created": "2017-12-29T15:47:57.352Z"
},{
  "id": 265,
  "name": "Pickle Rick",
  "status": "Alive",
  "species": "unknown",
  "type": "Pickle",
  "gender": "Male",
  "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/265.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/24"
  ],
  "url": "https://rickandmortyapi.com/api/character/265",
  "created": "2017-12-31T13:47:10.617Z"
},{
  "id": 266,
  "name": "Piece of Toast",
  "status": "Alive",
  "species": "unknown",
  "type": "Bread",
  "gender": "Genderless",
  "origin": {
      "name": "unknown",
      "url": ""
  },
  "location": {
      "name": "Interdimensional Cable",
      "url": "https://rickandmortyapi.com/api/location/6"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/266.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/17"
  ],
  "url": "https://rickandmortyapi.com/api/character/266",
  "created": "2017-12-31T13:48:58.850Z"
},{
  "id": 313,
  "name": "Shleemypants",
  "status": "Alive",
  "species": "unknown",
  "type": "Omniscient being",
  "gender": "Male",
  "origin": {
      "name": "unknown",
      "url": ""
  },
  "location": {
      "name": "unknown",
      "url": ""
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/313.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/12"
  ],
  "url": "https://rickandmortyapi.com/api/character/313",
  "created": "2018-01-05T14:52:31.489Z"
}]
//const prueba = filterData(characters,"unknown");
describe('filter Data', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('charaters are unknowns', () => {
    expect(filterData(characters,"unknown")).toStrictEqual(unknown);
  });

  it('charaters are all', () => {
    expect(filterData(characters,"Species")).toStrictEqual(characters);
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('characters are sort Z-A', () => {
    expect(sortData(unknown,-1)).toStrictEqual(reverse);
  });

  it('characters are sort A-Z', () => {
    expect(sortData(unknown, 1)).toStrictEqual(unknown);
  });
});

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('it is calculate', () => {
    expect(computeStats(unknown)).toStrictEqual(calcule);
  });

  it('it is calculate alive', () => {
    expect(computeStats(charactersAlive)).toStrictEqual(calculeAlive);
  });

  it('it is calculate dead', () => {
    expect(computeStats(charactersDead)).toStrictEqual(calculeDead);
  });

  it('it is calculate unknown', () => {
    expect(computeStats(charactersUnknown)).toStrictEqual(calculeUnknown);
  });
});
