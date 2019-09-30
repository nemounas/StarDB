import React from 'react';
import ReactDOM from 'react-dom';

class SwapiApi {

    _urlBase = "https://swapi.co/api";
   
    async GetResorses (url) {
       
        const res = await fetch(`${this._urlBase}${url}`);
       
        if(!res.ok){
            throw new Error(`cold not fetch. res.status: ${res.status}`)
        }
        const body = await res.json();
        return body;
    }
    async getAllPeople(){
        const res = await this.GetResorses(`/people/`)
        return res.results;
    }
    getPerson(id){
        
        return this.GetResorses(`/people/${id}`);
    }
}

const swapico = new SwapiApi()
swapico.getPerson(5).then((people) => {
    console.log(people.name)
})

 
ReactDOM.render(<div>Hello</div>, document.getElementById('root'));


