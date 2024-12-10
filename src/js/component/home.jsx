import React, {useState, useEffect} from "react";
import "/src/styles/index.css";

//create your first component
const useTrafficLight = () => {
	const [state, setState] = useState('Verde');

	useEffect(() => {
		const intervalo = setTimeout(() => {
            setState((prevState) =>
                prevState === 'Verde'
                    ? 'Ambar'
                    : prevState === 'Ambar'
                    ? 'Rojo'
					: prevState === 'Rojo'
                    ? 'Verde'
					: 'Verde'
            );
        }, state === "Verde" ? 5000 : state === "Ambar" ? 2500 : 3000);
		return () => clearInterval(intervalo);
	}, [state]);

	return state;
};

	const TrafficLight = () => {
		const state = useTrafficLight();

	return (
		<div className = 'TrafficLightsContainer'>
			<div className="TrafficLights">
				<div className = {state === 'Rojo' ? 'active-red': ""}></div>
				<div className = {state === 'Ambar' ? 'active-yellow' : ""}></div>
				<div className = {state === 'Verde' ? 'active-green': ""}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
