import CommandData from "../assets/data/commands.json";

const arrow = ">";

const CheckCommand = (command: string) => {
  const commands = Object.keys(CommandData);

  if (commands.includes(command.trim().toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

const CheckCommandAndExecute = (command: string) => {
  command = command.trim().toLowerCase();
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
    return (
      <li>
        <p className="text-error">
          The term '{command}' is not recognized as the name of a cmdlet,
          function, script file, or operable program.{" "}
        </p>
        <p className="text-white">Type "help" or "cls" for assistance.</p>
      </li>
    );
  }
};

const HelpCommand = () => {
  return (
    <div className="flex gap-2 flex-col ">
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">help</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">about</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">contact</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">projects</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">skills</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">education</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">experience</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">clear</p>
      </span>
    </div>
  );
};

const AboutCommand = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <span className="text-white flex gap-2">
        <pre>-{arrow}</pre>
        <p className="text-commandResult">
          Hello World, My Name is Harsh Keshri.
        </p>
      </span>
      <span className="text-white flex gap-2">
        <pre>-{arrow}</pre>
        <p className="text-commandResult">I am a Full Stack Developer.</p>
      </span>
      <span className="text-white flex gap-2">
        <pre>-{arrow}</pre>
        <p className="text-commandResult">
          I work with technologies like React, Next Js, Tailwind CSS, Node Js,
          and more.
        </p>
      </span>
      <span className="text-white flex gap-2">
        <pre>-{arrow}</pre>
        <p className="text-commandResult">
          I'm always excited to learn new things and implement them in my work.
        </p>
      </span>
      <span className="text-white flex gap-2">
        <pre>-{arrow}</pre>
        <p className="text-commandResult">
          I started coding in my 7th Standard, primarily using Java.
        </p>
      </span>
      <span className="text-white flex gap-2">
        <pre>-{arrow}</pre>
        <p className="text-commandResult">
          I dived into coding in December 2021.
        </p>
      </span>
      <span className="text-white flex gap-2">
        <pre>-{arrow}</pre>
        <p className="text-commandResult">
          I began with Web Development and learned Flutter to enter the app
          development field.
        </p>
      </span>
      <span className="text-white flex gap-2">
        <pre>-{arrow}</pre>
        <p className="text-commandResult">
          I've also explored the Game Development field using C#, primarily for
          a Hackathon.
        </p>
      </span>
      <span className="text-white flex gap-2">
        <pre>-{arrow}</pre>
        <p className="text-commandResult">
          I have some basic knowledge of Blockchain technologies, including
          Solidity, Smart Contracts, and Ethereum.
        </p>
      </span>
    </div>
  );
};

const ContactCommand = () => {
  return (
    <div className="flex flex-col gap-2 ">
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
    <div className="flex flex-col gap-2 ">
      <p className="text-white">Project 1</p>
      <p className="text-white">Project 2</p>
      <p className="text-white">Project 3</p>
      <p className="text-white">Project 4</p>
    </div>
  );
};

const SkillsCommand = () => {
  return (
    <div className="flex flex-col gap-2 ">
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
    <div className="flex flex-col gap-2 ">
      <p className="text-white">B.Tech</p>
      <p className="text-white">12th</p>
      <p className="text-white">10th</p>
    </div>
  );
};

const ExperienceCommand = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <p className="text-white">Company 1</p>
      <p className="text-white">Company 2</p>
      <p className="text-white">Company 3</p>
    </div>
  );
};

export { CheckCommand, CheckCommandAndExecute };
