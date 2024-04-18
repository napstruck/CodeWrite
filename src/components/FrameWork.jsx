import React from "react";
import reacticon from "/src/assets/images/react_icons.png";
import nexticon from "/src/assets/images/next_icons.png";
import tailwindicon from "/src/assets/images/tailwind_icons.png";
import vueicon from "/src/assets/images/vue_icons.png";
import sassicon from "/src/assets/images/sass_icons.png";

function FrameWork() {
  return (
    <section className="w-full h-full flex flex-col  bg-neutral-900">
      <h2 className="text-white text-4xl pt-5 text-center">Frameworks</h2>
      <div className="flex flex-row w-full h-full px-20">
        <div class=" max-w-[1300px] w-full h-[500px] flex items-center justify-center gap-5">
          {[
            {
              image: reacticon,
              title: "React",
              desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
              link: "https://react.dev/",
            },
            {
              image: nexticon,
              title: "Nextjs",
              desc: "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
              link: "https://nextjs.org/",
            },
            {
              image: tailwindicon,
              title: "Tailwind",
              desc: "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables",
              link: "https://tailwindcss.com/",
            },
            {
              image: vueicon,
              title: "Vue",
              desc: "Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.",
              link: "https://vuejs.org/",
            },
            {
              image: sassicon,
              title: "Sass",
              desc: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes ",
              link: "https://sass-lang.com/",
            },
          ].map((card, index) => (
            <div class="group h-[300px] w-[300px] [perspective:1000px]">
              <div class="relative h-[250px] w-[250px]rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0 bg-black flex flex-col justify-center items-center">
                  <img
                    class="h-[150px] w-[15 0px] rounded-xl"
                    src={card.image}
                    alt=""
                  />
                  <h className="text-white text-xl pt-5">{card.title}</h>
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-2 text-center text-slate-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-sm font-light">{card.desc}</h1>
                    <a href={card.link}>
                      {" "}
                      <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                        {card.link}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FrameWork;
