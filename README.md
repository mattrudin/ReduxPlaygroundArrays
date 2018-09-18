# ReduxPlaygroundArrays
Playground app with react and redux


## Index

[1. Instructions](#1-instructions/) 

[2. Lessons learned](#2-lessons-learned)



## 1. Instructions
Based on the redux tutorial of [Dave Ceddia: How Redux Works](https://daveceddia.com/how-does-redux-work/)  


## 2. Lessons learned
### redux
#### Handle input
```javascript
//reducer.js
//action.payload has a reference to the key/value pair in the react component (see List.js)
export const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'TITLE':
			return{
				...state,
				title: action.payload
			};
		default:
			return state;
	}
};

//List.js
//The function with an event parameter
handleTitleInput = (event) => {
	this.props.dispatch({ type: 'TITLE', payload: event.target.value });
}

//The input component
<input type="text" onChange={this.handleTitleInput} />

//State to props mapping
//the key (title) is the used name in the component
//the value (state.title) ist the key name in the state/store
const mapStateToProps = (state) => ({
	title: state.title
});

//Injection into the component
export default connect(mapStateToProps)(List);
```