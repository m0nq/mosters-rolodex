import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';

const App = () => {
    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        (async () => {
            console.log('Running useEffect()...');
            const monsters = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
            setMonsters(monsters);
        })();
    }, []);

    return (
        <div className="App">
            <CardList monsters={monsters}/>
        </div>
    );
};

export default App;
