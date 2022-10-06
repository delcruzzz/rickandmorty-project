export default function CharCard({ char, planetName = char.origin.name  }) {
    
    return (
        <article className="w-auto p-4 rounded-xl border-2 border-green-300 bg-gray-100">
            <div className="py-2 space-y-4 border-t-2 border-b-2 border-black">
                <header>
                    <h2 className="text-center font-extrabold">{ char.name }</h2>
                </header>
                <section>
                    <img src={ char.image } className="rounded-xl" />
                </section>
                <section>
                    <p>{ char.species }</p>
                    <span 
                        className={ 
                            `${
                                char.status === 'Alive' 
                                ? "text-green-400" 
                                : "text-red-400" 
                            } text-lg font-bold italic`
                        }
                    >
                        { char.status }
                    </span>
                    <p>{ planetName }</p>
                </section>
            </div>
        </article>
    );
}