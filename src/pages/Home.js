import React from 'react';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import Richtext from '../components/Richtext';
import Showcase from '../components/Showcase';
import Advantages from '../components/Advantages';
import YourProject from '../components/YourProject';
import Footer from '../components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Slideshow />
            <Richtext />
            <Showcase />
            <YourProject />
            <Advantages />
            <Footer />
        </div>
    );
}

export default App;
