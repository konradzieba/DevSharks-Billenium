import ReactMarkdown from 'react-markdown'
import Navbar from '../Navbar/Navbar';

const Doc = () => {
	return (
		<>
			<Navbar />
			<ReactMarkdown>
				# DevSharks - Billenium Repozytorium zespołu DevSharks, storzone w celu realizacji projektu Interaktywnej
				tablicy Kanban.
			</ReactMarkdown>
		</>
	);
};

export default Doc;
