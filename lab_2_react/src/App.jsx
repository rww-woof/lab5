import { useState, useEffect } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
         const now = new Date()
          const hours = now.getHours();

          if (hours >= 7 && hours < 21) {
             setTheme('light');
          } else {
              setTheme('dark');
          }
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const screenBgClass = theme === 'light'
        ? "bg-cover bg-[url('/HBxA_j2aYAAd905.jpg')]"
        : "bg-gray-900";

    const containerClass = theme === 'light'
        ? "bg-[#facfb9]/70 text-[#5d1885]"
        : "bg-gray-800 text-gray-200";


    return (
        <div className={`min-h-screen ${screenBgClass} bg-center bg-fixed py-4 px-5 relative transition-colors duration-300`}>
            <div className="max-w-2xl mx-auto flex justify-end mb-4">
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 bg-[#4584d6] hover:bg-blue-600 text-white text-sm font-bold rounded shadow-md transition-colors"
                >
                    {theme === 'light' ? 'Увімкнути нічний режим' : 'Увімкнути денний режим'}
                </button>
            </div>

            <div className={`max-w-2xl mx-auto font-serif shadow-2xl rounded-sm transition-colors duration-300 ${containerClass}`}>
        <Header />
        <Education />
        <Experience />
        <Skills />
        <Reviews />
        <Footer />
      </div>

      <ContactForm />
    </div>
  );
}

export default App;