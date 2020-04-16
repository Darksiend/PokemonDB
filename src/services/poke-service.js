export default class PokeService {

    _apiBase = 'https://pokeapi.co/api/v2';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllPokemons() {
        const res = await this.getResource(`/pokemon/`);
        return res.results;
    }

    async getPokemon(id) {

        const pokemon = await this.getResource(`/pokemon/${id}/`);

        return this._transformPokemon(pokemon);
    }

    async getAllBerries() {
        const res = await this.getResource(`/berry/`);
        return res.results.map(this._transformBerry);
    }

    async getBerry(id) {
        const berry = await this.getResource(`/berry/${id}/`);
        return this._transformBerry(berry);
    }

    async getAllItems() {
        const res = await this.getResource(`/item/`);
        return res.results;
    }

    getItem(id) {
        return this.getResource(`/item/${id}/`);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }



    _transformPokemon = (pokemon) => {

        return {
            id: pokemon.id,
            name: pokemon.name,
            base_experience: pokemon.base_experience,
            height: pokemon.height,
            weight: pokemon.weight

        }

    }

    _transformBerry = (berry) => {
        return {
            id: berry.id,
            name: berry.name,
            growth_time: berry.growth_time,
            size: berry.size
        }
    }


}
