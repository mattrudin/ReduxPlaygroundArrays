import React from 'react';
import './List.css';
import Tile from '../Tile/Tile';
import { connect } from 'react-redux';

class List extends React.Component{
	addTile = () => {
		this.props.dispatch({ type: 'ADD_TILE' });
	}

	removeTile = () => {
		this.props.dispatch({ type: 'REMOVE_TILE' });
	}

	handleTitleInput = (event) => {
		this.props.dispatch({ type: 'TITLE', payload: event.target.value });
	}

	handleDescriptionInput = (event) => {
		this.props.dispatch({ type: 'DESCRIPTION', payload: event.target.value });
	}

	render() {
		const tileArray = this.props.tileArray.map((tile, index) => {
			return <Tile 	title={this.props.title}
							description={this.props.description}
							key={index} />
		})

		return(
			<div className="list">
				<div className="buttonRow">
					<button className='button' onClick={this.addTile}>Add Tile</button>
					<button className='button' onClick={this.removeTile}>Remove Tile</button>
					<input type="text" onChange={this.handleTitleInput} />
					<input type="text" onChange={this.handleDescriptionInput} />
				</div>
				<div className="List">
					{tileArray}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	tileArray: state.tileArray,
	title: state.title,
	description: state.description
});

export default connect(mapStateToProps)(List);