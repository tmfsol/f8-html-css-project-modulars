import About from '~/components/About';
import Brand from '~/components/Brand';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Hero from '~/components/Hero';
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
			</main>

			<Footer />
		</>
	);
};

export default App;
