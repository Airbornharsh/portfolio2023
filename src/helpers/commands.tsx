import CommandData from "../assets/data/commands.json";

const CheckCommand = (command: string) => {
  const commands = Object.keys(CommandData);

  if (commands.includes(command.trim())) {
    return true;
  } else {
    return false;
  }
};

const CheckCommandAndExecute = (command: string) => {
  if (command === "help") {
    return HelpCommand();
  } else if (command === "about") {
    return AboutCommand();
  } else if (command === "contact") {
    return ContactCommand();
  } else if (command === "projects") {
    return ProjectsCommand();
  } else if (command === "skills") {
    return SkillsCommand();
  } else if (command === "education") {
    return EducationCommand();
  } else if (command === "experience") {
    return ExperienceCommand();
  } else {
    return "Command not found";
  }
};

const HelpCommand = () => {
  const arrow = ">";
  return (
    <div className="flex gap-2 font-medium">
      <p className="text-white">-{arrow} help</p>
      <p className="text-white">about</p>
      <p className="text-white">contact</p>
      <p className="text-white">projects/</p>
      <p className="text-white">skills/</p>
      <p className="text-white">education/</p>
      <p className="text-white">experience/</p>
      <p className="text-white">clear</p>
    </div>
  );
};

const AboutCommand = () => {
  return (
    <div className="flex flex-col gap-2 font-medium">
      <p className="text-white">Name: Harsh Keshri</p>
      <p className="text-white">Age: 21</p>
      <p className="text-white">Location: India</p>
      <p className="text-white">Education: B.Tech</p>
      <p className="text-white">
        Skills: React, Next, Node, Express, MongoDB, TailwindCSS
      </p>
    </div>
  );
};

const ContactCommand = () => {
  return (
    <div className="flex flex-col gap-2 font-medium">
      <p className="text-white">
        Email:
        <a
          className="text-white"
          href="mailto:harshkeshri1234567@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          harshkeshri1234567@gmailcom
        </a>
      </p>
      <p className="text-white">
        Github:
        <a
          className="text-white"
          href="https://github.com/airbornharsh"
          target="_blank"
          rel="noopener noreferrer"
        >
          @airbornharsh
        </a>
      </p>
      <p className="text-white">
        LinkedIn:
        <a
          className="text-white"
          href="https://linkedin.com/in/airbornharsh"
          target="_blank"
          rel="noopener noreferrer"
        >
          @airbornharsh
        </a>
      </p>
      <p className="text-white">
        X:
        <a
          className="text-white"
          href="https://x.com/airbornharsh"
          target="_blank"
          rel="noopener noreferrer"
        >
          @airbornharsh
        </a>
      </p>
      <p className="text-white">
        Instagram:
        <a
          className="text-white"
          href="https://instagram.com/airbornharsh"
          target="_blank"
          rel="noopener noreferrer"
        >
          @airbornharsh
        </a>
      </p>
    </div>
  );
};

const ProjectsCommand = () => {
  return (
    <div className="flex flex-col gap-2 font-medium">
      <p className="text-white">Project 1</p>
      <p className="text-white">Project 2</p>
      <p className="text-white">Project 3</p>
      <p className="text-white">Project 4</p>
    </div>
  );
};

const SkillsCommand = () => {
  return (
    <div className="flex flex-col gap-2 font-medium">
      <p className="text-white">Languages:</p>
      <ul>
        <li className="text-white">JavaScript</li>
        <li className="text-white">C++</li>
        <li className="text-white">C#</li>
        <li className="text-white">Dart</li>
        <li className="text-white">Solidity</li>
      </ul>
      <p className="text-white">Frontend:</p>
      <ul>
        <li className="text-white">HTML</li>
        <li className="text-white">Tailwind CSS</li>
        <li className="text-white">React</li>
        <li className="text-white">Flutter</li>
        <li className="text-white">Next.js</li>
        <li className="text-white">RazorPay</li>
      </ul>
      <p className="text-white">Backend:</p>
      <ul>
        <li className="text-white">Node.js</li>
        <li className="text-white">Express</li>
        <li className="text-white">MongoDB</li>
        <li className="text-white">SST</li>
        <li className="text-white">AWS</li>
        <li className="text-white">NEXT.js</li>
        <li className="text-white">HardHat</li>
        <li className="text-white">RazorPay</li>
      </ul>
      <p className="text-white">Technologies:</p>
      <ul>
        <li className="text-white">Figma</li>
        <li className="text-white">GitHub</li>
        <li className="text-white">VS Code</li>
      </ul>
    </div>
  );
};

const EducationCommand = () => {
  return (
    <div className="flex flex-col gap-2 font-medium">
      <p className="text-white">B.Tech</p>
      <p className="text-white">12th</p>
      <p className="text-white">10th</p>
    </div>
  );
};

const ExperienceCommand = () => {
  return (
    <div className="flex flex-col gap-2 font-medium">
      <p className="text-white">Company 1</p>
      <p className="text-white">Company 2</p>
      <p className="text-white">Company 3</p>
    </div>
  );
};

export { CheckCommand, CheckCommandAndExecute };
