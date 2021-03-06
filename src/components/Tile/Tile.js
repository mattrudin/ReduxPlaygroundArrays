import React from 'react';
import './Tile.css';

const Tile = (props) => {
	return(
		<div className="tile">
	      	<h1>{props.title}</h1>
			<p>{props.description}</p>
	    </div>
	);
};

export default Tile;