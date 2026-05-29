import React from "react";

const scientists = [
  {
    id: "1",
    name: "Katsuko Saruhashi",
    professional: "Geochemist",
    profile_pic: "../src/assets/profile.png",
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discovered: "Polonium (chemical element)",
  },
  {
    name: "Gorge Washington",
    professional: "Physicist and chemist",
    profile_pic: "../src/assets/profile.png",
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    discovered: "A method for measuring carbon dioxide in seawater",
  },
];

const Scientist = (props) => {
  return (
    <div className="shadow-sm p-8 rounded-sm flex flex-col gap-8 ">
      <img
        src={props.profile_pic}
        alt={props.name}
        className="rounded-full"
        width={100}
        height={100}
      />
      <div>
        <h4>{props.name}</h4>
        <ul>
          <li className="font-semibold">{props.professional}</li>
          <li className="w-full lg:max-w-xl">
            Awards({props.awards.length}) - ({props.awards.join(", ")})
          </li>
          <li>Discovered - {props.discovered}</li>
        </ul>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section>
      <h3>Notable Scientists</h3>
      <div className="flex flex-wrap gap-8">
        {scientists.map((scientist) => (
          <Scientist key={scientist} {...scientist} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
