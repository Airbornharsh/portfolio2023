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
  } else if (command === "clear") {
    return ClearCommand();
  } else {
    return "Command not found";
  }
};

const HelpCommand = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-color3">help</p>
      <p className="text-color3">about</p>
      <p className="text-color3">contact</p>
      <p className="text-color3">projects</p>
      <p className="text-color3">skills</p>
      <p className="text-color3">education</p>
      <p className="text-color3">experience</p>
      <p className="text-color3">clear</p>
    </div>
  );
};

const AboutCommand = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-color3">Name: Harsh Sharma</p>
      <p className="text-color3">Age: 21</p>
      <p className="text-color3">Location: India</p>
      <p className="text-color3">Education: B.Tech</p>
      <p className="text-color3">
        Skills: React, Next, Node, Express, MongoDB, TailwindCSS
      </p>
    </div>
  );
};

const ContactCommand = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-color3">
        Email:
        <a
          className="text-color3"
          href="mailto:"
          target="_blank"
          rel="noopener noreferrer"
        >
          @
        </a>
      </p>
      <p className="text-color3">
        Github:
        <a
          className="text-color3"
          href="
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          @
        </a>
      </p>
      <p className="text-color3">
        LinkedIn:
        <a
          className="text-color3"
          href="
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          @
        </a>
      </p>
    </div>
  );
};

const ProjectsCommand = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-color3">Project 1</p>
      <p className="text-color3">Project 2</p>
      <p className="text-color3">Project 3</p>
      <p className="text-color3">Project 4</p>
    </div>
  );
};

const SkillsCommand = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-color3">React</p>
      <p className="text-color3">Next</p>
      <p className="text-color3">Node</p>
      <p className="text-color3">Express</p>
      <p className="text-color3">MongoDB</p>
      <p className="text-color3">TailwindCSS</p>
    </div>
  );
};

const EducationCommand = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-color3">B.Tech</p>
      <p className="text-color3">12th</p>
      <p className="text-color3">10th</p>
    </div>
  );
};

const ExperienceCommand = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-color3">Company 1</p>
      <p className="text-color3">Company 2</p>
      <p className="text-color3">Company 3</p>
    </div>
  );
};

const ClearCommand = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-color3">Clear</p>
    </div>
  );
};

export { CheckCommand, CheckCommandAndExecute };
