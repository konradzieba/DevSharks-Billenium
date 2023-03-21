import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Home/Home'
import './index.scss'
import kanbanBoard from './components/img/kanban-board.svg'
import kanbanKnowlege from './components/img/kanban-knowlege.svg'

const App = () => {
	return (
		<div style={{height: '100vh'}}>
			<Navbar />
			<Home />
			<img className='kanban-board' src={kanbanBoard} alt='two people standing next to kanbanboard'></img>
			<img className='kanban-knowlege' src={kanbanKnowlege} alt='two people standing next to kanbanboard'></img>
		</div>
	)
}

export default App
