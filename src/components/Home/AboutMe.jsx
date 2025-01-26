/* eslint-disable react/no-unescaped-entities */
import Header from "../shared/Section/Header";

const AboutMe = () => {
  return (
    <div id="about-me" className="pb-20 w-full md:w-11/12 lg:w-10/12 mx-auto">
      {/* section header */}
      <Header header={"About-me"}></Header>
      {/* text div */}
      <div className="text-grayText space-y-6">
        <h1>Hello, I’m Sheikh Saiyam</h1>
        <p>
          -----"A passionate Web Developer with a focus on Front-End
          Development. My programming journey began with Programming Hero. Since
          then, I’ve been honing my skills and evolving as a developer, focusing
          on creating user-friendly and interactive websites. Currently, I am
          expanding my expertise into back-end development, working with
          technologies like Express.js, Node.js, MongoDB, and Next.js"-----
        </p>
        <p>
          -----"As a developer, I thrive on solving complex problems and turning
          ideas into functional, responsive web applications. I specialize in
          HTML, CSS, JavaScript, and React.js, and am constantly learning new
          technologies to improve my craft. I love building intuitive user
          interfaces that not only look great but also function seamlessly
          across devices."-----
        </p>
        <p>
          -----"Beyond coding, I have a strong passion for football. It’s not
          just a hobby for me—it’s a way to stay active, unwind, and develop
          teamwork skills. The strategy and discipline involved in sports
          inspire me to bring the same level of commitment and focus into my
          programming projects."-----
        </p>
        <p>
          -----"I’m excited about combining my love for technology with my
          creative problem-solving abilities. As I continue to grow my skills,
          I’m always eager to collaborate on innovative projects and contribute
          to the development of meaningful digital solutions. If you’re looking
          for a passionate, dedicated developer to work on your next project,
          feel free to reach out. I’d love to connect and explore new
          opportunities!"-----
        </p>
      </div>
      {/* text div */}
    </div>
  );
};

export default AboutMe;
