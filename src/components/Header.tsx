import Button from '~/components/Button';
import Logo from '~/components/icons/Logo';

const Header = () => {
	return (
		<header className="sticky left-0 top-0 z-30 bg-white pt-7">
			<div className="container">
				{/* Header top */}
				<div className="relative flex items-center justify-between pb-3">
					<div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

					<a
						className="inline-flex items-center"
						href="/"
					>
						<Logo />
						<span className="ml-2">MODULARS</span>
					</a>
					<div className="ml-auto flex items-center">
						{/* Navbar */}
						<nav>
							<ul className="flex gap-x-7 px-2 py-1 font-public-sans text-lg font-medium hover:text-text-800">
								<li>
									<a
										className="relative px-2 py-1 font-public-sans text-lg font-medium after:absolute after:-bottom-7 after:left-2 after:block after:h-[2px] after:w-4 after:bg-primary after:opacity-100 after:transition after:duration-700 hover:text-text-800 hover:after:opacity-100"
										href="/"
									>
										Home
									</a>
								</li>
								<li>
									<a
										className="relative px-2 py-1 font-public-sans text-lg font-medium after:absolute after:-bottom-7 after:left-2 after:block after:h-[2px] after:w-4 after:bg-primary after:opacity-0 after:transition after:duration-700 hover:text-text-800 hover:after:opacity-100"
										href="#about"
									>
										About
									</a>
								</li>
								<li>
									<a
										className="relative px-2 py-1 font-public-sans text-lg font-medium after:absolute after:-bottom-7 after:left-2 after:block after:h-[2px] after:w-4 after:bg-primary after:opacity-0 after:transition after:duration-700 hover:text-text-800 hover:after:opacity-100"
										href="#blog"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										className="relative px-2 py-1 font-public-sans text-lg font-medium after:absolute after:-bottom-7 after:left-2 after:block after:h-[2px] after:w-4 after:bg-primary after:opacity-0 after:transition after:duration-700 hover:text-text-800 hover:after:opacity-100"
										href="#contact"
									>
										Contact
									</a>
								</li>
							</ul>
						</nav>

						<Button className="ml-22">Sign Up</Button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
