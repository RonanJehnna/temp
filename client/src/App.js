import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
			"http://localhost:5000/student/list/")
			.then((res) => res.json())
			.then((json) => {
				console.log(json)
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					User_FullName: { item.fullName },
					Full_Email: { item.email },
					User_Mobile: { item.mobile },
					User_City: { item.city }
					</ol>
				))
			}
		</div>
	);
}
}

export default App;
