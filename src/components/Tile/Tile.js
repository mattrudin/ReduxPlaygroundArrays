import React from 'react';
import './Tile.css';

const Tile = (props) => {
	return(
		<div className="tile">
	      	<h1>{props.title}</h1>
			<p>Description</p>
	    </div>
	);
};

export default Tile;