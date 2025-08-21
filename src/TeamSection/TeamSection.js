import React from "react";
import "./TeamSection.css";

import chef1 from "../assets/c1.jpg";
import chef2 from "../assets/c2.jpg";
import chef3 from "../assets/c3.jpg";
import chef4 from "../assets/c4.jpg";

const teamMembers = [
  {
    img: chef1,
    name: "Nicolas Victor",
    role: "Master Chef",
  },
  {
    img: chef2,
    name: "Nicolas Victor",
    role: "Kitchen Manager",
  },
  {
    img: chef3,
    name: "Nicolas Victor",
    role: "Executive Chef",
  },
  {
    img: chef4,
    name: "Nicolas Victor",
    role: "General Manager",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <h2>
          OUR <span>TEAM</span> MEMBER
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-img">
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      <div className="team-btn">
        <button>SHOW ALL &gt;</button>
      </div>
    </section>
  );
};

export default TeamSection;
