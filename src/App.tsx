import About from '~/components/About';
import Blog from '~/components/Blog';
import Brand from '~/components/Brand';
import Contact from '~/components/Contact';
import Feature from '~/components/Feature';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Hero from '~/components/Hero';
import Project from '~/components/Project';
import Service from '~/components/Service';

const App = () => {
	return (
		<>
			<Header />
			<Hero />

			<main>
				<Brand />
				<Service />
				<About />
				<Contact />
				<Project />
				<Feature />
				<Blog />
			</main>

			<Footer />
		</>
	);
};

export default App;
