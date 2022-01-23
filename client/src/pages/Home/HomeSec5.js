import React from "react";
import "../../App.css";
const membersSays = [
	{
		head: "Kate - UK",
		p: `“Thank you so much this is great. I
home school my daughter due to her
high anxiety, so this will be used all
time”
`,
	},
	{
		head: "Anonymous",
		p: `“This group has given me the courage
to go against the system and fight to
get my daughter the help needs.”
`,
	},
	{
		head: "SENsational Life",
		p: `“So happy that our closed parent
support group has such an impact.
Come on and over join us.”
`,
	},
];

const HomeSec5 = () => {
	return (
		<div className=" flex flex-col bg-[#1E6DD0] p-3 justify-items-center">
			<h1 className="text-center text-white text-2xl">
				What Our Beloved Members Say
			</h1>
			<div className="grid  grid-cols-3  justify-items-center  m-8  gap-8">
				{membersSays.map((x) => (
					<div className=" w-4/5 p-6 flex flex-col se bg-white   ">
						<h3 className=" text-lg">{x.head}</h3>
						<p>{x.p}</p>
					</div>
				))}
			</div>
			<button className="bg-black text-white p-2   self-center">
				Click here to Register
			</button>
		</div>
	);
};

export default HomeSec5;
