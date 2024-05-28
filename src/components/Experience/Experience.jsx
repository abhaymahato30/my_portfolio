import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";

// circular progress bar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.title_container}>
        <h2 className={styles.title}>Expertise</h2>
      </div>

      <div className={styles.content}>
        {data.map((d) => (
          <div className={styles.progress_card}>
            <div  className={styles.circular_bar}>
              <CircularProgressbar
                value={d.percentage}
                text={`${d.percentage}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `${d.color}`,
                 
                    // Customize transition animation
                    transition: "stroke-dashoffset 0.5s ease 0s",
                   
                  },
                }}
              />
            </div>
            <h2>{d.skill}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

const data = [
  {
    skill: `HTML`,
    percentage: 90,
    color:`rgba(0, 124, 188, 1)`,
  },
  {
    skill: `CSS`,
    percentage: 80,
    color:`rgba(0, 124, 188, 1) `,

  },
  {
    skill: `JavaScript`,
    percentage: 75,
    color:`rgba(0, 124, 188, 1) `,

  },
  {
    skill: `Bootstrap`,
    percentage: 80,
    color:`rgba(0, 124, 188, 1)`,

  },
  {
    skill: `Talwind Css`,
    percentage: 70,
    color:`rgba(0, 124, 188, 1)`,

  },
  {
    skill: `React JS`,
    percentage: 70,
    color:`rgba(0, 124, 188, 1)`,

  },
  {
    skill: `Redux`,
    percentage: 60,
    color:`rgba(0, 124, 188, 1)`,

  },
  {
    skill: `Node JS`,
    percentage: 50,
    color:`rgba(0, 124, 188, 1)`,

  },
];
