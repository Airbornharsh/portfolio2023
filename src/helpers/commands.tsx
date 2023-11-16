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
    <div className="flex flex-col gap-2 text-commandResult ">
      <span>
        <p>
          👋 Hello World! I'm Harsh Keshri, a passionate Full Stack Developer
          with expertise in:
        </p>
      </span>
      <span className="mt-3">
        <p>
          I embarked on my coding journey in the 7th standard, initially with
          Java, but truly delved into it in December 2021. Since then, I've:
        </p>
      </span>
      <ul className="list-disc list-outside pl-4">
        <li>
          <p>🚀 Explored Web Development as my starting point.</p>
        </li>
        <li>
          <p>📱 Ventured into App Development with Flutter.</p>
        </li>
        <li>
          <p>🕹️ Dabbled in Game Development (C#) for a thrilling Hackathon.</p>
        </li>
        <li>
          <p>
            🔗 Acquired basic knowledge in Blockchain (Solidity, Smart
            Contracts, Ethereum).
          </p>
        </li>
        <li>
          <p>🚀 Recently learned GoLang to broaden my skill set.</p>
        </li>
      </ul>
      <span className="mt-3 mb-1">
        <p>
          I'm always eager to embrace new technologies and integrate them into
          my projects. Let's create something amazing together! 💻✨
        </p>
      </span>
    </div>
  );
};

const ContactCommand = () => {
  return (
    <ul className="flex flex-col gap-2 list-disc list-outside pl-4 text-commandResult font-bold">
      <li className="mt-1">
        <p>
          Email:{" "}
          <a
            href="mailto:harshkeshri1234567@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
            harshkeshri1234567@gmailcom
          </a>
        </p>
      </li>
      <li>
        <p>
          Github:{" "}
          <a
            href="https://github.com/airbornharsh"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
            @airbornharsh
          </a>
        </p>
      </li>
      <li>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/airbornharsh"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
            @airbornharsh
          </a>
        </p>
      </li>
      <li>
        <p>
          X:{" "}
          <a
            href="https://x.com/airbornharsh"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
            @airbornharsh
          </a>
        </p>
      </li>
      <li>
        <p>
          Instagram:{" "}
          <a
            href="https://instagram.com/airbornharsh"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
            @airbornharsh
          </a>
        </p>
      </li>
      <li className="list-none mt-1 font-normal">
        👆 Click on any to contact me!{" "}
      </li>
    </ul>
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
    <div className="container mx-auto p-8 bg-gray-800 text-commandResult flex flex-wrap gap-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Languages:</h2>
        <ul className="list-disc pl-4">
          <li>JavaScript</li>
          <li>C++</li>
          <li>C#</li>
          <li>Dart</li>
          <li>Solidity</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Frontend:</h2>
        <ul className="list-disc pl-4">
          <li>HTML</li>
          <li>Tailwind CSS</li>
          <li>React</li>
          <li>Flutter</li>
          <li>Next.js</li>
          <li>RazorPay</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Backend:</h2>
        <ul className="list-disc pl-4">
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>SST</li>
          <li>AWS</li>
          <li>NEXT.js</li>
          <li>HardHat</li>
          <li>RazorPay</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Technologies:</h2>
        <ul className="list-disc pl-4">
          <li>Figma</li>
          <li>GitHub</li>
          <li>VS Code</li>
        </ul>
      </div>
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
