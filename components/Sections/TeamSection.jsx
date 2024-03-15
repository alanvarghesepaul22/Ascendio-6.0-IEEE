import React from "react";
import TeamCard from "../Common/TeamCard";
import Team1 from "/public/team1.jpeg";
import Team2 from "/public/team2.jpeg";
import Team3 from "/public/team3.jpeg";
import Team4 from "/public/team4.jpeg";

const TeamSection = () => {
  return (
    <div className="flex justify-center items-center gap-16 mt-14 flex-wrap">
      {data.map((item, index) => (
        <TeamCard
          key={index}
          imageUrl={item.imageUrl}
          name={item.name}
          role={item.role}
        />
      ))}
    </div>
  );
};

export default TeamSection;

const data = [
  { imageUrl: Team1, name: "Alan Varghese Paul", role: "Web Developer" },
  { imageUrl: Team2, name: "Ashwin Sivasankaran", role: "Content Creator" },
  { imageUrl: Team3, name: "Gopikrishna MA", role: "Web Developer" },
  { imageUrl: Team4, name: "Ajal Krishna", role: "Web Designer" },
  { imageUrl: Team1, name: "Gokul Unni", role: "Chairman" },
];
