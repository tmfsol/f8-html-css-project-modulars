import Brand from '~/components/Brand';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Hero from '~/components/Hero';

const App = () => {
	return (
		<>
			<Header />
			<Hero />

			<main>
				<Brand />
			</main>

			<Footer />
		</>
	);
};

export default App;
