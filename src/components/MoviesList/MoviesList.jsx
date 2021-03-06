import { NavLink , withRouter} from 'react-router-dom';
import MoviePreview from '../MoviePreview';
import './MoviesList.scss'

const MoviesList = ({ movies, location }) => {
	return (
		<ul className='MoviesList'>
			{movies.map(({ id, title, name, poster_path }) => (
				<li key={id}>
					<NavLink to={{
						pathname: `/movies/${id}`,
						state: {
							from: location,
						}}}>
						<MoviePreview title={title} name={name} poster_path={poster_path}/>
					</NavLink>
				</li>
			))}
		</ul>
	);
};
 
export default withRouter(MoviesList);