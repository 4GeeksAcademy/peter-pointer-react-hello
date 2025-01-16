import React from "react";  // 1. Importo React
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle


// 2. Create your first component with PascalCase
const Home = () => {
	// 3. Code JS
	
	// 4. Retorno un solo elemento HTML
	return (
		<div className="text-center">
			
			<h1 className="text-center mt-5">{"Intro React"}</h1>
			
			
			<p>
				<img src={rigoImage} />
			</p>
			
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
					
		
		</div>
	);
};

// 5. Exporto mi componente
export default Home;

// 6.

// 7.