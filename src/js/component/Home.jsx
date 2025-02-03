import React from "react";  // 1. Importo React
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle 
// 6. Importar el componente y 7. Utilizar en otro componente
import Navbar from "./Navbar.jsx"; // Componente con export default
import { Footer } from "./Footer.jsx"; // Componente con export const
import { Jumbotron } from "./Jumbotron.jsx"; // Componente con export const
import { Title } from "./Title.jsx";
import { Card } from "./Card.jsx";
import { BtnCallToAction } from "./BtnCallToAction.jsx";
import { SimpleCounter } from "./SimpleCounter.jsx";
import { ExampleControlledInputs } from "./ExampleControlledInputs.jsx";
import { TodoList } from "./TodoList.jsx";
import { ExampleFetchComplex } from "./ExampleFetchComplex.jsx";

// 2. Create your first component with PascalCase
const Home = () => {
	// 3. Code JS

	// 4. Retorno un solo elemento HTML
	return (
		<div className="container text-center">
			<Navbar />
			{/* <Jumbotron /> */}
			{/* <Title text="Forms" color="primary"/> */}
			{/* <TodoList /> */}
			<ExampleFetchComplex/>
			{/* <ExampleControlledInputs /> */}
			{/* <BtnCallToAction /> */}
			{/* <SimpleCounter /> */}
			{/* <div className="container d-flex justify-content-center">
				<Card
					image="https://randomuser.me/api/portraits/lego/6.jpg"
					title="I'm a Mexican Lego"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					button="Learn More"
				/>
				<Card
					image="https://randomuser.me/api/portraits/lego/3.jpg"
					title="I'm a Doctor Lego"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					button="Learn More"
				/>
				<Card
					image="https://randomuser.me/api/portraits/lego/4.jpg"
					title="I'm a normal Lego"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					button="Learn More"
				/>
			</div> */}
			<Footer />
		</div>
	);
};

// 5. Exporto mi componente
export default Home;
// 6.

// 7.
