import React from 'react'


const Searchbox = (props) => {
	return (
		<div>
			<input onChange={props.onChange} type="text" placholder="search robots" value={props.value}/>
		</div>
	)
}

export default Searchbox