import axios from 'axios';
import Link from 'next/dist/client/link';
const Poke = ({ pokemon }) => (
    <div>

        <h1>Pokedex</h1>
        {pokemon.map((pokeman, i) => {
            return(
                // <a href={pokeman.name}>
                // <p>
                //     {i +1} {pokeman.name}

                // </p>
                // </a>
                <p>
                    <Link href={`../pokemon/${i +1}`}>
                        <a>
                            {i+1} {pokeman.name}
                        </a>
                    </Link>
                </p>
            );
        })}
    </div>
)


Poke.getInitialProps = async () => {
    const pokemon = await axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=5')
        .then(response => response.data.results);
        return {pokemon};
    
  


    }

    


export default Poke;
