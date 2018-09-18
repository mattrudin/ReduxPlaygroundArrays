import React from 'react';
import './List.css';
import Tile from '../Tile/Tile';

class List extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			tileArray: [0,0,0]
		}
	}

	addTile = () => {
		this.setState({
			tileArray: [...this.state.tileArray,0]
		})
	}

	removeTile = () => {
		this.setState({
			tileArray: this.state.tileArray.slice(0,-1)
		})
	}

	render() {
		const tileArray = this.state.tileArray.map((tile, index) => {
			return <Tile 	title={index}
							key={index} />
		})

		return(
			<div className="list">
				<div className="buttonRow">
					<button className='button' onClick={this.addTile}>Add Tile</button>
					<button className='button' onClick={this.removeTile}>Remove Tile</button>
				</div>
				<div className="List">
					{tileArray}
				</div>
			</div>
		);
	}
}

export default List;