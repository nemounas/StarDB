export default class SwapiApi {

    _urlBase = "https://swapi.co/api";
    _urlDetails = "https://starwars-visualguide.com/assets/img";

    async GetResorses(url) {

        const res = await fetch(`${this._urlBase}${url}`);

        if (!res.ok) {
            throw new Error(`cold not fetch. res.status: ${res.status}`)
        }
        const body = await res.json();
        return body;
    }
    getAllPeople = async () => {
        const res = await this.GetResorses(`/people/`)
        return res.results.map(this._trasformPerson);
    }
    getPerson = async (id) => {
        const person = await this.GetResorses(`/people/${id}`);
        return this._trasformPerson(person)
    }

    getAllPlanets = async () => {
        const res = await this.GetResorses(`/planets/`)
        return res.results.map(this._transformPlanet);
    }
    getPlanet = async (id) => {
        const planet = await this.GetResorses(`/planets/${id}`)
        
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.GetResorses(`/starships/`)
        return res.results.map(this._transformStarships);
    }
    getStarship = async (id) => {
        const starships = await this.GetResorses(`/starships/${id}`);
        
        return this._transformStarships(starships);
    }

    getPesonImage = ({id}) => {
       return `${this._urlDetails}/characters/${id}.jpg`
    }

    getStarshipImage = ({id}) => {
        
        return `${this._urlDetails}/starships/${id}.jpg`
     }
     
     getPlanetImage = ({id}) => {
        return `${this._urlDetails}/planets/${id}.jpg`
     }

    _transformPlanet = (planet) => {

        return {
            id: this._extractId(planet),
            name: planet.name,
            Population: planet.population,
            RotationPeriod: planet.rotation_period,
            Diameter: planet.diameter

        }
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1];
        return id;
    }

    _trasformPerson = (persons) => {
        return {
            id: this._extractId(persons),
            name: persons.name,
            gender: persons.gender,
            birthYear: persons.birth_year,
            eyeColor: persons.eye_color
        }
    }

    _transformStarships = (starships) => {
        return {
            id: this._extractId(starships),
            name: starships.name,
            manufacturer: starships.manufacturer,
            costInCredits: starships.costInCredits,
            length: starships.length,
            crew: starships.crew,
            passengers: starships.passengers,
            cargoCapasity: starships.cargoCapasity,

        }
    }
}