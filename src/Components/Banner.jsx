/* eslint-disable no-unused-vars */
import React from "react";
import { color, motion } from "motion/react";
import team1 from "../assets/staff/team1.jpg";
import team2 from "../assets/staff/team2.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[500px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src={team1}
            className="max-w-sm  shadow-2xl border-l-4 border-b-4 rounded-t-4xl rounded-br-4xl border-green-500"
          />
          <motion.img
            animate={{ x: [50, 100, 50] }}
            transition={{
              delay: 2,
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src={team2}
            className="max-w-sm  shadow-2xl border-l-4 border-b-4 rounded-t-4xl rounded-br-4xl border-green-500"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-5xl font-bold"
          >
            Job{" "}
            <motion.span
              animate={{ color: ["#ff000", "#00ff00", "#000ff", "#ff00ff"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Portals
            </motion.span>{" "}
            News!
          </motion.h1>
          <p className="py-6 w-1/2">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
