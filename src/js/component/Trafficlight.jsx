import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export function Trafficlight() {
	const [selectedColor, setSelectedColor] = useState("Red");

	return (
		<div className="text-center">
			<div className="Trafficpole"></div>
			<div className="trafficLight">
				<br />
				<div
					onClick={() => setSelectedColor("Red")}
					className={
						"light Red" +
						(selectedColor === "Red" ? " lighton" : "")
					}></div>
				<br />

				<div
					onClick={() => setSelectedColor("Yellow")}
					className={
						"light Yellow" +
						(selectedColor === "Yellow" ? " lighton" : "")
					}></div>
				<br />

				<div
					onClick={() => setSelectedColor("Green")}
					className={
						"light Green" +
						(selectedColor === "Green" ? " lighton" : "")
					}></div>
			</div>
		</div>
	);
}

export default Trafficlight;
