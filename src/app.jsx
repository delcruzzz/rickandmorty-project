import { useEffect, useState } from "react";
import CharCard from "./components/card/char_card";
import InputSearch from "./components/search/input_search";
import rick_morty_brand from "./assets/Rick_and_Morty.svg";

export default function App () {

    const [searchChar, setSearchChar] = useState("");

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${ searchChar }`);
                const data = await res.json();
                setCharacters(data.results);
                console.log(data.results);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [searchChar]);

    const filterdChars = characters.filter(filChar => {
        return filChar.name.toLowerCase().includes(searchChar.toLowerCase());
    })

    return(
        <div className="w-full">
            <div className="max-w-7xl mx-auto">
                <header className="flex items-center justify-center px-8 py-2 bg-transparent">
                    <img src={ rick_morty_brand } className="w-48" />
                </header>
                <section className="flex items-center justify-center px-8 py-12">
                    <InputSearch searchChar={ searchChar } setSearchChar={ setSearchChar } />
                </section>
                <section className="grid grid-cols-2 gap-4 md:grid-cols-4 items-center justify-center mx-12 my-8">
                    {
                        filterdChars.map(char => {
                            return <CharCard key={ char.id } char={ char } />
                        })
                    }
                </section>
            </div>
        </div>
    );
};