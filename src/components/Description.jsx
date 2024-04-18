import React from "react";
import pen from "/src/assets/images/pen.png";
import book from "/src/assets/images/book.png";
import graph from "/src/assets/images/growth.png";

function DescriptionSection() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-black py-40">
      <div className="max-w-[1300px] w-full">
        <div className="grid grid-cols-3 gap-10 justify-center items-center">
          {[
            {
              image: pen,
              title: "Write and Develop",
              description:
                "CodeWrite is the perfect platform to take your programming skills to the next level. Build projects, test new features, and customize your code to your liking. With a supportive community and powerful resources, CodeWrite helps you achieve your goals and unlock your full potential as a programmer.",
            },
            {
              image: book,
              title: "Read and Understand",
              description:
                "Taking the time to read and understand your code can save you from future mistakes. By comprehending the role of your code, you can avoid errors and improve your programming skills. Invest in your future success by investing in understanding your code today.",
            },
            {
              image: graph,
              title: "Achieve your dreams",
              description:
                "Unleash your full potential by letting your ideas and presentations drive your code. With unstoppable momentum, you'll soar to new heights and create innovative projects that will set you apart from the rest. The sky's the limit!",
            },
          ].map((card, index) => (
            <div className="bg-neutral-800 p-4 rounded-md h-[400px] w-[300px]">
              <img
                src={card.image}
                width={100}
                height={100}
                className="bg-black -translate-x-8 -translate-y-8 p-4 rounded-md"
              />
              <p class="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-500 to-violet-700 pb-2">
                {card.title}
              </p>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DescriptionSection;
