import Header from "../shared/Section/Header";
import SkillCard from "./../Card/SkillCard";

const Skills = () => {
  const skills = [
    // Front-end skills --->
    {
      name: "HTML",
      icon: "https://skillicons.dev/icons?i=html",
      progress: 95,
    },
    {
      name: "CSS",
      icon: "https://skillicons.dev/icons?i=css",
      progress: 90,
    },
    {
      name: "JavaScript",
      icon: "https://skillicons.dev/icons?i=js",
      progress: 70,
    },
    {
      name: "React.js",
      icon: "https://skillicons.dev/icons?i=react",
      progress: 60,
    },
    {
      name: "Firebase",
      icon: "https://skillicons.dev/icons?i=firebase",
      progress: 75,
    },
    // Back-end skills --->
    {
      name: "Node.js",
      icon: "https://skillicons.dev/icons?i=nodejs",
      progress: 40,
    },
    {
      name: "MongoDB",
      icon: "https://skillicons.dev/icons?i=mongodb",
      progress: 50,
    },
    {
      name: "Express.js",
      icon: "https://skillicons.dev/icons?i=express",
      progress: 45,
    },
    {
      name: "Next.js",
      icon: "https://skillicons.dev/icons?i=nextjs",
      progress: 30,
    },
  ];

  const tools = [
    {
      name: "VS Code",
      icon: "https://skillicons.dev/icons?i=vscode",
    },
    {
      name: "Git",
      icon: "https://skillicons.dev/icons?i=git",
    },
    {
      name: "GitHub",
      icon: "https://skillicons.dev/icons?i=github",
    },
    {
      name: "Figma",
      icon: "https://skillicons.dev/icons?i=figma",
    },
    {
      name: "NPM",
      icon: "https://skillicons.dev/icons?i=npm",
    },
    {
      name: "Vercel",
      icon: "https://skillicons.dev/icons?i=vercel",
    },
    {
      name: "Netlify",
      icon: "https://skillicons.dev/icons?i=netlify",
    },
    {
      name: "Postman",
      icon: "https://skillicons.dev/icons?i=postman",
    },
  ];

  return (
    <div id="skills" className="pb-20">
      {/* section header */}
      <Header header={"Skills"}></Header>

      {/* front-end */}
      <div className="border-t border-grayText mt-8">
        <div className="mb-8 text-base md:text-lg py-2 px-6 w-fit mx-auto rounded-none border-grayText border border-t-0 text-center">
          <span className="text-grayText font-bold tracking-widest">
            Front-end
          </span>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skills.slice(0, 3).map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
        <div className="mt-8 flex gap-6 flex-wrap w-full items-center justify-center">
          {skills.slice(3, 5).map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
      {/* front-end */}

      {/* Back-end */}
      <div className="border-t border-grayText mt-16">
        <div className="mb-8  text-base md:text-lg py-2 px-6 w-fit mx-auto rounded-none border-grayText border border-t-0 text-center">
          <span className="text-grayText font-bold tracking-widest">
            Back-end
          </span>
        </div>
        <div className="flex gap-6 items-center flex-wrap justify-center w-full">
          {skills.slice(5).map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
      {/* Back-end */}

      {/* tools */}
      <div className="border-t border-grayText mt-16">
        <div className="mb-8  text-base md:text-lg py-2 px-6 w-fit mx-auto rounded-none border-grayText border border-t-0 text-center">
          <span className="text-grayText font-bold tracking-widest">Tools</span>
        </div>
        <div className="grid gap-4 h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {tools.map((skill, index) => (
            <div key={index} className="grid place-items-stretch">
              <div className="border px-6 py-2 border-grayText flex w-full text-center justify-center items-center gap-4">
                <img src={skill.icon} alt={skill.name} />
                <h1 className="text-grayText text-2xl">{skill.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* tools */}
    </div>
  );
};

export default Skills;
