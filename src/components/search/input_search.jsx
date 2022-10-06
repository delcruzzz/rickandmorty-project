export default function InputSearch({ searchChar, setSearchChar }) {
    return (
        <input 
            className="border-2 border-blue-300 rounded-xl w-full outline-none px-8 py-2"
            onChange={ event => setSearchChar(event.target.value) }
            value={ searchChar }
        />
    );
};