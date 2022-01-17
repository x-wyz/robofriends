import React from 'react'

import Card from './card'

const CardList = (props) => {
	return (
		<div>
			{
		      props.list.map(robot => {
		        return (
		          <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} username={robot.username}/>
		        )
		      })
		    }
		</div>
	)
}

export default CardList;