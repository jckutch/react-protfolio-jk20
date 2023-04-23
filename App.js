import React from 'react';
import '../src/Assets/css/app.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <About />
            </main>
        </>
    )
}
export default App