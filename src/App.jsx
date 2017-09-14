import React from 'react'
import ButtonUpdate from "./components/ButtonUpdate.jsx"

export default class App extends React.Component {
	render() {
    const student = {
      name:"Student A",
      age:"10",
      dob:"18/1/1992",
      tel:"012959020",
      gender:"male"
    }
	return (
			<div>
				<h1>Header App Title: </h1>
        <ButtonUpdate title="Button Update"/>
      </div>
		)
	}
}
