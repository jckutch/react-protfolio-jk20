import React, {useState} from 'react';
import '../src/Assets/css/app.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';


const App = () => {
    const [currentPage, setCurrentPage] = useState('About')
    const renderPages = () => {
        if (currentPage === 'About'){
            return <About />
        }
        if (currentPage === 'Portfolio'){
            return <Portfolio />
        }
        if (currentPage === 'Contact'){
            return <Contact />
        }
        return <Resume />
    }

    const handlePage = (page) => setCurrentPage(page);
    return (
        <div>
        <Header currentPage={currentPage} handlePage={handlePage} />
        {renderPages()}
        <Footer />
        </div>
    )
}
export default App