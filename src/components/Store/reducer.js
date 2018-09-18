const initialState = {
	tileArray: [0,0,0],
	title: 'hello',
	description: 'description'
};

export const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_TILE':
			return{
				...state,
				tileArray: [...state.tileArray,0]
			};
		case 'REMOVE_TILE':
			return{
				...state,
				tileArray: state.tileArray.slice(0,-1)
			};
		case 'TITLE':
			return{
				...state,
				title: action.payload
			};
		case 'DESCRIPTION':
			return{
				...state,
				description: action.payload
			};
		default:
			return state;
	}
};