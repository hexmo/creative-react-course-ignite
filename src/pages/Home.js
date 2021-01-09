import React, { useEffect } from 'react';
// Components
import Game from '../components/Game';

// Styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

const Home = () => {
	// fetch games
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);

	// Get fetched data
	const { popular, newGames, upComingGames } = useSelector(
		(state) => state.games,
	);
	return (
		<GameList>
			<h2>Upcoming Games</h2>
			<Games>
				{upComingGames.map((game) => (
					<Game
						name={game.name}
						released={game.released}
						id={game.id}
						key={game.id}
						image={game.background_image}
					/>
				))}
			</Games>
			<h2>Latest Games</h2>
			<Games>
				{newGames.map((game) => (
					<Game
						name={game.name}
						released={game.released}
						id={game.id}
						key={game.id}
						image={game.background_image}
					/>
				))}
			</Games>
			<h2>Popular Games Games</h2>
			<Games>
				{popular.map((game) => (
					<Game
						name={game.name}
						released={game.released}
						id={game.id}
						key={game.id}
						image={game.background_image}
					/>
				))}
			</Games>
		</GameList>
	);
};

// Styled components and framer motion
const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;
const Games = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	min-height: 80vh;
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;

export default Home;
