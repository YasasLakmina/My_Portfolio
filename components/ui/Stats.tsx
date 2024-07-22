"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "Projects Completed",
  },
  {
    num: 10,
    text: "Technologies Used",
  },
  {
    num: 500,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-8 xl:pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 xl:gap-60 justify-start">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center xl:items-start xl:flex-row gap-2 xl:gap-4"
            >
              <div className="flex items-center">
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-center xl:text-left"
                />
              </div>
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } text-center xl:text-left text-white/80 leading-tight`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
