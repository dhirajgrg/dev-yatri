import React from 'react';
import Navbar from '../components/Navbar';
import Hero from './Hero';
import FeaturedLogs from './FeaturedLogs';
import Cards from '../components/Cards';
import Projects from './Projects';
import Journey from './Journey';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
	return (
		<div className='bg-terminal-white '>
			<Navbar />
			<Hero />
			<FeaturedLogs />
			<Cards />
			<Projects />
			<Journey />
			<Contact />
			<Footer/>
		</div>
	);
}

export default Home;
