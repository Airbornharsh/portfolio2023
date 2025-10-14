import CommandData from "../assets/data/commands.json";
import Projects from "../assets/data/projects";
import CommandDetails from "../assets/data/commands.json";

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
  } else if (command === "ls") {
    return LsCommand();
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
  } else if (command === "resume") {
    return ResumeCommand();
  } else {
    return (
      <li className="flex flex-col gap-2 my-2">
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
    <div className="bg-color2 rounded-lg p-6 my-2 border border-color3">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">?</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-commandResult">
            Available Commands
          </h2>
          <p className="text-sm text-gray-400">
            Interactive terminal portfolio commands
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors">
            <span className="text-color3 font-mono text-lg">help</span>
            <span className="text-gray-300 text-sm">
              {CommandDetails["help"]}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors">
            <span className="text-color3 font-mono text-lg">about</span>
            <span className="text-gray-300 text-sm">
              {CommandDetails["about"]}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors">
            <span className="text-color3 font-mono text-lg">contact</span>
            <span className="text-gray-300 text-sm">
              {CommandDetails["contact"]}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors">
            <span className="text-color3 font-mono text-lg">projects</span>
            <span className="text-gray-300 text-sm">
              {CommandDetails["projects"]}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors">
            <span className="text-color3 font-mono text-lg">skills</span>
            <span className="text-gray-300 text-sm">
              {CommandDetails["skills"]}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors">
            <span className="text-color3 font-mono text-lg">education</span>
            <span className="text-gray-300 text-sm">
              {CommandDetails["education"]}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors">
            <span className="text-color3 font-mono text-lg">experience</span>
            <span className="text-gray-300 text-sm">
              {CommandDetails["experience"]}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors">
            <span className="text-color3 font-mono text-lg">resume</span>
            <span className="text-gray-300 text-sm">
              {CommandDetails["resume"]}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-color1 rounded-lg border border-color3/30">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-400">💡</span>
          <span className="text-sm font-semibold text-commandResult">
            Quick Tips
          </span>
        </div>
        <div className="text-sm text-gray-300 space-y-1">
          <p>
            • Use <span className="text-color3 font-mono">TAB</span> for command
            autocomplete
          </p>
          <p>
            • Use <span className="text-color3 font-mono">↑↓</span> arrow keys
            to navigate suggestions
          </p>
          <p>
            • Type <span className="text-color3 font-mono">clear</span> to clear
            the terminal
          </p>
          <p>
            • Type <span className="text-color3 font-mono">exit</span> to go to
            visual portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

const LsCommand = () => {
  const commands = Object.keys(CommandDetails);

  const handleCommandClick = (command: string) => {
    // Create a custom event to trigger command execution
    const event = new CustomEvent("executeCommand", {
      detail: { command: command },
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="bg-color2 rounded-lg p-6 my-2 border border-color3">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">📁</span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-commandResult">
            Directory Listing
          </h2>
          <p className="text-sm text-gray-400">Available commands and files</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {commands.map((command, index) => (
          <div
            key={command + index}
            className="p-3 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors group cursor-pointer"
            onClick={() => handleCommandClick(command)}
            title={`Click to execute: ${command}`}
          >
            <div className="flex items-center gap-2">
              <span className="text-color3 text-lg">
                {command === "help"
                  ? "❓"
                  : command === "about"
                  ? "👤"
                  : command === "contact"
                  ? "📧"
                  : command === "projects"
                  ? "🚀"
                  : command === "skills"
                  ? "🛠️"
                  : command === "education"
                  ? "🎓"
                  : command === "experience"
                  ? "💼"
                  : command === "resume"
                  ? "📄"
                  : command === "clear"
                  ? "🧹"
                  : command === "exit"
                  ? "🚪"
                  : "📄"}
              </span>
              <span className="text-commandResult font-mono text-sm group-hover:text-color3 transition-colors">
                {command}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1 truncate">
              {CommandDetails[command as keyof typeof CommandDetails]}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-color1 rounded-lg border border-color3/30">
        <div className="flex items-center gap-2">
          <span className="text-green-400">💡</span>
          <span className="text-sm text-gray-300">
            Click any command above to execute it, or type{" "}
            <span className="text-color3 font-mono">help</span> for detailed
            information
          </span>
        </div>
      </div>
    </div>
  );
};

const AboutCommand = () => {
  return (
    <div className="bg-color2 rounded-lg p-6 my-2 border border-color3">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-2xl">HK</span>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-commandResult">
            Harsh Keshri
          </h2>
          <p className="text-lg text-gray-400">
            Full Stack Developer & AI Engineer
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="p-4 bg-color1 rounded-lg border border-color3/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">👋</span>
            <h3 className="text-xl font-semibold text-commandResult">
              Hello World!
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in modern
            technologies like React, Next.js, TypeScript, Node.js, AWS, and
            AI/ML integration. I specialize in building scalable applications
            and have extensive experience in Web3, blockchain development, and
            AI agent systems.
          </p>
        </div>

        <div className="p-4 bg-color1 rounded-lg border border-color3/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🚀</span>
            <h3 className="text-xl font-semibold text-commandResult">
              Current Role
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Currently working as a Full Stack Developer at{" "}
            <span className="text-color3 font-semibold">Zereus AI</span>, where
            I've built AI trading frameworks using LangGraph and LangChain,
            developed scalable backend systems, and created Web3 integrations
            with Solana SDK.
          </p>
        </div>

        <div className="p-4 bg-color1 rounded-lg border border-color3/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">📚</span>
            <h3 className="text-xl font-semibold text-commandResult">
              Journey
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            I have been coding since my 7th Standard (Java) but seriously dived
            into development in December 2021. My journey spans from web
            development to mobile apps, blockchain, and now AI/ML integration.
          </p>
        </div>

        <div className="p-4 bg-color1 rounded-lg border border-color3/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🛠️</span>
            <h3 className="text-xl font-semibold text-commandResult">
              Expertise Areas
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <span className="text-green-400">🚀</span>
              <span className="text-gray-300">Full Stack Development</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🤖</span>
              <span className="text-gray-300">AI/ML Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">🔗</span>
              <span className="text-gray-300">Web3/Blockchain</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">📱</span>
              <span className="text-gray-300">Mobile Development</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-400">☁️</span>
              <span className="text-gray-300">Cloud Infrastructure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-400">🕹️</span>
              <span className="text-gray-300">Game Development</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-color1 rounded-lg border border-color3/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">💡</span>
            <h3 className="text-xl font-semibold text-commandResult">
              Mission
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            I have experience across multiple domains and I'm passionate about
            learning new technologies and implementing them in real-world
            applications. Let's create something amazing together! 💻✨
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
          AI/ML
        </span>
        <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
          Web3
        </span>
        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
          Full Stack
        </span>
        <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
          DevOps
        </span>
        <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm font-medium">
          Blockchain
        </span>
        <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
          Open Source
        </span>
      </div>
    </div>
  );
};

const ContactCommand = () => {
  return (
    <div className="bg-color2 rounded-lg p-6 my-2 border border-color3">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">📧</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-commandResult">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-400">
            Let's connect and build something amazing together
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="p-4 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                <span className="text-red-400 text-lg">📧</span>
              </div>
              <div>
                <h3 className="font-semibold text-commandResult">Email</h3>
                <a
                  href="mailto:harshkeshri1234567@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-color3 transition-colors text-sm"
                >
                  harshkeshri1234567@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-500/20 rounded-full flex items-center justify-center">
                <span className="text-gray-400 text-lg">🐙</span>
              </div>
              <div>
                <h3 className="font-semibold text-commandResult">GitHub</h3>
                <a
                  href="https://github.com/airbornharsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-color3 transition-colors text-sm"
                >
                  @airbornharsh
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-lg">💼</span>
              </div>
              <div>
                <h3 className="font-semibold text-commandResult">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/airbornharsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-color3 transition-colors text-sm"
                >
                  @airbornharsh
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                <span className="text-gray-300 text-lg">𝕏</span>
              </div>
              <div>
                <h3 className="font-semibold text-commandResult">
                  X (Twitter)
                </h3>
                <a
                  href="https://x.com/airbornharsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-color3 transition-colors text-sm"
                >
                  @airbornharsh
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 bg-color1 rounded-lg border border-color3/30 hover:border-color3/60 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center">
                <span className="text-pink-400 text-lg">📷</span>
              </div>
              <div>
                <h3 className="font-semibold text-commandResult">Instagram</h3>
                <a
                  href="https://instagram.com/airbornharsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-color3 transition-colors text-sm"
                >
                  @airbornharsh
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 bg-color1 rounded-lg border border-color3/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <span className="text-yellow-400 text-lg">💬</span>
              </div>
              <div>
                <h3 className="font-semibold text-commandResult">
                  Response Time
                </h3>
                <p className="text-gray-300 text-sm">Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-color1 rounded-lg border border-color3/30">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-400">💡</span>
          <span className="text-sm font-semibold text-commandResult">
            Let's Connect!
          </span>
        </div>
        <p className="text-sm text-gray-300">
          I'm always excited to discuss new opportunities, collaborate on
          projects, or just have a chat about technology. Feel free to reach out
          through any of the channels above! 🚀
        </p>
      </div>
    </div>
  );
};

const ProjectsCommand = () => {
  return (
    <ul className="flex flex-col gap-2 mt-6 my-2">
      <h2 className="text-2xl font-bold mb-4">Projects:</h2>

      {Projects.reverse().map((project, index: number) => (
        <li
          className="p-6 rounded-lg shadow-md mb-6"
          key={"project" + index + project.name}
        >
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(
              (tech: { name: string }, index: number) => (
                <span
                  key={"techName" + index.toString() + tech.name}
                  className="px-2 py-1 rounded text-commandResult"
                >
                  {tech.name}
                </span>
              )
            )}
          </div>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2 block"
            >
              View on GitHub
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

const SkillsCommand = () => {
  return (
    <div className="bg-color2 rounded-lg p-6 my-2 border border-color3">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">🛠️</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-commandResult">
            Technical Skills
          </h2>
          <p className="text-sm text-gray-400">
            Technologies and tools I work with
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-color1 rounded-lg border border-color3/30">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">💻</span>
            <h3 className="text-lg font-semibold text-commandResult">
              Languages
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-sm">
              JavaScript
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">
              TypeScript
            </span>
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm">
              Python
            </span>
            <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-sm">
              Go
            </span>
            <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-sm">
              C++
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
              C#
            </span>
            <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded text-sm">
              Dart
            </span>
            <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-sm">
              Solidity
            </span>
          </div>
        </div>

        <div className="p-4 bg-color1 rounded-lg border border-color3/30">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🎨</span>
            <h3 className="text-lg font-semibold text-commandResult">
              Frontend
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-sm">
              HTML
            </span>
            <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-sm">
              Tailwind CSS
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">
              React
            </span>
            <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded text-sm">
              Next.js
            </span>
            <span className="bg-blue-400/20 text-blue-300 px-2 py-1 rounded text-sm">
              Flutter
            </span>
            <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-sm">
              Vite
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
              Zustand
            </span>
          </div>
        </div>

        <div className="p-4 bg-color1 rounded-lg border border-color3/30">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">⚙️</span>
            <h3 className="text-lg font-semibold text-commandResult">
              Backend
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm">
              Node.js
            </span>
            <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded text-sm">
              Express.js
            </span>
            <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-sm">
              Nest.js
            </span>
            <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-sm">
              Flask
            </span>
            <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-sm">
              Django
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">
              PostgreSQL
            </span>
            <span className="bg-green-400/20 text-green-300 px-2 py-1 rounded text-sm">
              MongoDB
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
              Neo4j
            </span>
            <span className="bg-red-400/20 text-red-300 px-2 py-1 rounded text-sm">
              Redis
            </span>
            <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-sm">
              AWS
            </span>
            <span className="bg-gray-400/20 text-gray-300 px-2 py-1 rounded text-sm">
              HardHat
            </span>
          </div>
        </div>

        <div className="p-4 bg-color1 rounded-lg border border-color3/30">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🤖</span>
            <h3 className="text-lg font-semibold text-commandResult">
              AI & Web3
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">
              LangGraph
            </span>
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm">
              LangChain
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
              AI Agents
            </span>
            <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-sm">
              Machine Learning
            </span>
            <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-sm">
              Web3.js
            </span>
            <span className="bg-purple-400/20 text-purple-300 px-2 py-1 rounded text-sm">
              Solana SDK
            </span>
            <span className="bg-blue-400/20 text-blue-300 px-2 py-1 rounded text-sm">
              TradingView
            </span>
          </div>
        </div>

        <div className="p-4 bg-color1 rounded-lg border border-color3/30">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">☁️</span>
            <h3 className="text-lg font-semibold text-commandResult">
              DevOps & Tools
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-sm">
              AWS
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">
              Docker
            </span>
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm">
              CI/CD
            </span>
            <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded text-sm">
              GitHub Actions
            </span>
            <span className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded text-sm">
              Figma
            </span>
            <span className="bg-blue-400/20 text-blue-300 px-2 py-1 rounded text-sm">
              VS Code
            </span>
            <span className="bg-orange-400/20 text-orange-300 px-2 py-1 rounded text-sm">
              Git
            </span>
            <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-sm">
              Linux
            </span>
          </div>
        </div>

        <div className="p-4 bg-color1 rounded-lg border border-color3/30">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📊</span>
            <h3 className="text-lg font-semibold text-commandResult">
              Experience Level
            </h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Full Stack Development</span>
                <span className="text-color3">Expert</span>
              </div>
              <div className="w-full bg-color2 rounded-full h-2">
                <div
                  className="bg-color3 h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">AI/ML Integration</span>
                <span className="text-color3">Advanced</span>
              </div>
              <div className="w-full bg-color2 rounded-full h-2">
                <div
                  className="bg-color3 h-2 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Web3/Blockchain</span>
                <span className="text-color3">Advanced</span>
              </div>
              <div className="w-full bg-color2 rounded-full h-2">
                <div
                  className="bg-color3 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-color1 rounded-lg border border-color3/30">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-400">💡</span>
          <span className="text-sm font-semibold text-commandResult">
            Always Learning
          </span>
        </div>
        <p className="text-sm text-gray-300">
          I'm constantly exploring new technologies and frameworks to stay at
          the forefront of development. Currently diving deeper into AI agent
          systems and advanced Web3 protocols! 🚀
        </p>
      </div>
    </div>
  );
};

type EducationCardProps = {
  institution: string;
  degree: string;
  location: string;
  grade: string;
  year: string;
};

const EducationCard = ({
  institution,
  degree,
  location,
  grade,
  year,
}: EducationCardProps) => {
  return (
    <div className="p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-2">{degree}</h3>
      <p className="mb-2">
        {institution}, {location}
      </p>
      <p className="mb-2">Grade: {grade}</p>
      <p>Year: {year}</p>
    </div>
  );
};

const EducationCommand = () => {
  return (
    <div className="flex flex-col gap-2 text-commandResult mt-6 my-2">
      <h2 className="text-2xl font-bold mb-4">Education:</h2>

      <EducationCard
        degree="BTech (CSE)"
        institution="Government College of Engineering, Kalahandi"
        location="Bhawanipatna"
        grade="GPA: 8.2"
        year="December 2021 - August 2025"
      />

      <EducationCard
        degree="12th"
        institution="Nirmala English School"
        location="Rajgangpur"
        grade="86.4%"
        year="2020"
      />

      <EducationCard
        degree="10th"
        institution="Nirmala English School"
        location="Rajgangpur"
        grade="82.6%"
        year="2018"
      />
    </div>
  );
};

const ExperienceCommand = () => {
  return (
    <div className="container mx-auto p-8 text-commandResult my-2">
      <h2 className="text-2xl font-bold mb-4">Professional Experience:</h2>

      {/* Zereus AI */}
      <div className="p-6 rounded-lg shadow-md mb-8 border border-blue-500/20">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-blue-300">Zereus AI</h3>
          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
            Full-time
          </span>
        </div>
        <p className="mb-2 font-semibold">Full Stack Developer</p>
        <p className="mb-2 text-gray-400">July 2024 - Present • Remote</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              Built and deployed scalable backend systems using TypeScript,
              Express, Django, PostgreSQL, MongoDB, and AWS
            </li>
            <li>
              Developed AI trading and research framework using LangGraph,
              LangChain, Web3 APIs, and Solana SDK
            </li>
            <li>
              Designed and maintained Neo4j graph databases for social media
              sentiment and topic trend mapping
            </li>
            <li>
              Integrated WebSockets and Zustand for real-time user experiences
            </li>
            <li>
              Built TradingView dashboard with secure wallet integration and
              on-chain trading support
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Achievements:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              ✓ Reduced system response time by 40% through optimized database
              queries
            </li>
            <li>
              ✓ Implemented multi-agent AI system handling 10K+ daily trading
              decisions
            </li>
            <li>✓ Achieved 99.9% uptime for critical trading infrastructure</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "TypeScript",
              "Express",
              "Django",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "LangGraph",
              "LangChain",
              "Web3",
              "Solana SDK",
              "Neo4j",
              "WebSockets",
              "Zustand",
              "TradingView",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Freelancing */}
      <div className="p-6 rounded-lg shadow-md mb-8 border border-green-500/20">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-green-300">Freelancing</h3>
          <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
            Contract
          </span>
        </div>
        <p className="mb-2 font-semibold">Full Stack Developer</p>
        <p className="mb-2 text-gray-400">April 2024 - July 2024 • Remote</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              Integrated custom-trained ML model with Next.js and Flask for
              real-time inference
            </li>
            <li>
              Built text-to-speech module to enhance accessibility and automate
              content delivery
            </li>
            <li>
              Developed dynamic website generator with user-friendly UI for
              non-technical users
            </li>
            <li>
              Delivered high-quality solutions under tight deadlines with
              modular design approach
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Achievements:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>✓ Delivered 5+ client projects within tight deadlines</li>
            <li>
              ✓ Improved client website performance by 60% through optimization
            </li>
            <li>✓ Reduced development time by 30% using reusable components</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "Flask",
              "Machine Learning",
              "Text-to-Speech",
              "React",
              "TypeScript",
              "Python",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Intelligent Cloud Applications */}
      <div className="p-6 rounded-lg shadow-md mb-8 border border-blue-500/20">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-blue-300">
            Intelligent Cloud Applications
          </h3>
          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
            Full-time
          </span>
        </div>
        <p className="mb-2 font-semibold">Full Stack Developer</p>
        <p className="mb-2 text-gray-400">
          November 2022 - April 2024 • Remote
        </p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              Led frontend and backend development of cloud-based web
              applications using React, Node.js, and AWS Serverless
            </li>
            <li>
              Improved application performance by implementing Zustand for state
              management and caching strategies
            </li>
            <li>
              Deployed AWS Lambda-based microservices, reducing infrastructure
              complexity
            </li>
            <li>
              Enhanced security by building robust authentication flows and
              streamlining CI/CD pipelines
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Achievements:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              ✓ Reduced infrastructure costs by 35% through serverless
              optimization
            </li>
            <li>
              ✓ Improved application load time by 50% through caching strategies
            </li>
            <li>
              ✓ Implemented CI/CD pipeline reducing deployment time by 70%
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Node.js",
              "AWS",
              "Serverless",
              "Zustand",
              "Lambda",
              "CI/CD",
              "Authentication",
              "Microservices",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bworkz Internship */}
      <div className="p-6 rounded-lg shadow-md mb-8 border border-purple-500/20">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-purple-300">Bworkz</h3>
          <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
            Internship
          </span>
        </div>
        <p className="mb-2 font-semibold">Full Stack Developer Intern</p>
        <p className="mb-2 text-gray-400">July 2022 - October 2022 • Remote</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              Developed and deployed full-stack web applications leveraging AWS
              Lambda and AWS S3
            </li>
            <li>
              Created reusable React.js components and optimized UI workflows
            </li>
            <li>
              Collaborated with product teams to translate business logic into
              scalable features
            </li>
            <li>
              Optimized API response times and database queries, improving
              backend performance
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Achievements:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              ✓ Improved API response time by 45% through query optimization
            </li>
            <li>✓ Created 15+ reusable components reducing development time</li>
            <li>✓ Successfully deployed 3 production applications</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "AWS Lambda",
              "AWS S3",
              "JavaScript",
              "Node.js",
              "Database Optimization",
              "UI/UX",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ResumeCommand = () => {
  return (
    <div className="flex flex-col gap-2 text-commandResult my-2">
      <h2 className="text-2xl font-bold mb-4">Resume Download:</h2>
      <div className="p-6 rounded-lg shadow-md border border-blue-500/20">
        <p className="mb-4">
          📄 Download my latest resume to learn more about my professional
          experience and skills.
        </p>
        <a
          href="https://drive.google.com/file/d/1iiB89PWGbQdTsrs0kKPA7852x_vgESfM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg inline-block transition-colors"
        >
          📥 Download Resume
        </a>
      </div>
    </div>
  );
};

export { CheckCommand, CheckCommandAndExecute };
