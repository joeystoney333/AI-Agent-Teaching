const docs = "https://hermes-agent.nousresearch.com/docs";
const source = (title, path) => ({ title, url: `${docs}/${path}` });

export const setupModules = [
  {
    id: "install",
    title: "Install the real Hermes Agent",
    subtitle:
      "Choose your machine, install the official agent, and check your setup.",
    minutes: 15,
    tag: "START HERE",
    icon: "Terminal",
    lessons: [
      {
        id: "install-what-you-need",
        title: "Know what you are installing",
        summary:
          "Hermes Agent is Nous Research’s open-source agent. This course is your walkthrough for using it.",
        blocks: [
          {
            type: "text",
            text: "Hermes Agent is the open-source agent made by Nous Research: the agent that grows with you. You run it on your computer or a server, connect a model provider, and give it tools. It can remember useful context across sessions and develop reusable skills from work. That learning loop is different from retraining the underlying model’s weights.",
          },
          {
            type: "text",
            text: "This website teaches you to set up your own Hermes installation. Course progress belongs to this website; actual chats, files, credentials, memory, and skills belong to the Hermes installation you create. The lessons do not run commands on your machine.",
          },
          {
            type: "list",
            items: [
              "Choose a machine: macOS, Linux, native Windows, or Windows with WSL2. Apple Silicon, Windows 10/11, and common Linux/WSL2 targets are documented first-party paths.",
              "Have an internet connection and permission to install software. The POSIX source installer needs Git, curl, tar, and SHA-256 utilities; it manages its own Python and other runtime tools.",
              "Plan model access: an eligible provider subscription, a funded API account, or sufficient hardware for a local model. Open-source agent software does not make paid model usage free.",
              "Start with one provider and a small practice folder. Add email, messaging, and scheduled jobs after your first chat works.",
            ],
          },
          {
            type: "callout",
            title: "Choose the official installation path",
            text: "Use the Nous Research website or repository. The official support matrix excludes pip/PyPI and Homebrew installs of hermes-agent. Intel Mac support differs by package; the Hermes-Setup.dmg bootstrap is Apple Silicon-only.",
          },
        ],
        exercise: {
          title: "Make your setup decision",
          steps: [
            "Choose your operating system using the platform buttons in this course.",
            "Decide whether Hermes will run on your daily computer or a separate machine.",
            "Choose cloud model access for the fastest first run, or the local-model lesson if you prefer that route.",
          ],
        },
        quiz: {
          question: "What does this website install on your machine?",
          options: [
            "Hermes and all integrations automatically",
            "Nothing; you follow the steps on your own machine",
            "A replacement for your model provider",
          ],
          correct: 1,
          explanation:
            "The course is a guide. You install and configure the real Nous Research Hermes Agent yourself.",
        },
        sources: [
          source("Official quickstart", "getting-started/quickstart"),
          source("Platform support", "getting-started/platform-support"),
        ],
      },
      {
        id: "install-posix",
        title: "Run the official installer",
        summary:
          "Follow one supported installation route for your selected operating system.",
        blocks: [
          {
            type: "text",
            text: "Run one installation route on the machine where you want Hermes to work. These are the official source-install commands: they download and execute the installer, prepare a source checkout and launcher, and install managed runtime dependencies. The website itself does not execute them.",
          },
          {
            type: "text",
            platform: "mac",
            text: "Open Terminal on your Mac and run the command below. Apple Silicon has first-party support priority; check the linked support matrix for the Intel Mac package distinctions.",
          },
          {
            type: "code",
            platform: "mac",
            label: "macOS Terminal — official installer",
            code: "curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash",
          },
          {
            type: "text",
            platform: "linux",
            text: "Open your Linux shell, or your existing Ubuntu / WSL2 shell, and run the command below. Native Linux users do not need WSL. For WSL2, run this inside Linux rather than PowerShell.",
          },
          {
            type: "code",
            platform: "linux",
            label: "Linux / WSL2 terminal — official installer",
            code: "curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash",
          },
          {
            type: "text",
            platform: "windows",
            text: "For native Windows, open PowerShell and run the command below. Current official documentation supports this route directly; WSL2 is an alternative, not a requirement.",
          },
          {
            type: "code",
            platform: "windows",
            label: "PowerShell — native Windows installer",
            code: "iex (irm https://hermes-agent.nousresearch.com/install.ps1)",
          },
          {
            type: "callout",
            platform: "windows",
            title: "Optional alternative: WSL2",
            text: "If you prefer a Linux environment, run the commands below in Administrator PowerShell. Restart if asked, open Ubuntu, and create its Linux user. Confirm VERSION 2. Then select Linux / WSL2 in this course and run its installer inside Ubuntu. You only need one Hermes route.",
          },
          {
            type: "code",
            platform: "windows",
            label: "Optional WSL2 preparation — Administrator PowerShell",
            code: "wsl --install\nwsl --list --verbose",
          },
          {
            type: "text",
            text: "Read the installer’s final status and follow its prompts. You can choose a provider now or use the next module. If a prerequisite or download fails, keep the reported command and log location so you can fix that specific step. Do not delete an existing Hermes data directory to repair the application: it can contain settings and previous work.",
          },
          {
            type: "callout",
            title: "Finish this step on your own machine",
            text: "A successful installation message means the installer finished its work. The next lesson separately verifies that your terminal can find Hermes and that its runtime starts correctly.",
          },
        ],
        exercise: {
          title: "Install your selected route",
          steps: [
            "Select the operating system where Hermes will actually run.",
            "Run that route’s official installer in the indicated terminal.",
            "Read the final status and resolve any installation error before continuing.",
          ],
        },
        quiz: {
          question: "How many installation routes do you need for this course?",
          options: [
            "Both native Windows and WSL2",
            "Every supported operating system",
            "One supported route on the machine where you will use Hermes",
          ],
          correct: 2,
          explanation:
            "Choose one environment and follow its instructions. WSL2 is optional for Windows users; native Linux does not need it.",
        },
        sources: [
          source("Official installation", "getting-started/installation"),
          source("Windows / WSL2 guide", "user-guide/windows-wsl-quickstart"),
          source("Platform support", "getting-started/platform-support"),
        ],
      },
      {
        id: "install-windows",
        title: "Verify your installation",
        summary:
          "Check the launcher, read diagnostics, and locate the data belonging to your installation.",
        blocks: [
          {
            type: "text",
            text: "Open a new terminal in the same environment where you installed Hermes. This refreshes the PATH used to find its launcher. Run the help command first: a real command reference confirms that your shell can start Hermes. Then run the diagnostic command to check the installation and configuration.",
          },
          {
            type: "text",
            platform: "mac",
            text: "A new Terminal window is the simplest refresh. In an existing Zsh session use source ~/.zshrc; in Bash use source ~/.bashrc. Choose the command matching your actual shell.",
          },
          {
            type: "text",
            platform: "linux",
            text: "Open a fresh Linux / WSL2 terminal. In an existing Bash session use source ~/.bashrc; in Zsh use source ~/.zshrc. For WSL2, stay inside the distro where you installed Hermes.",
          },
          {
            type: "text",
            platform: "windows",
            text: "Open a fresh PowerShell window for your native Windows installation. If you chose WSL2 instead, select Linux / WSL2 and run these checks inside its Ubuntu terminal.",
          },
          {
            type: "code",
            label: "Your refreshed terminal — check the launcher and runtime",
            code: "hermes --help\nhermes doctor",
          },
          {
            type: "text",
            text: "Read what the diagnostic actually reports. Missing provider authentication before you configure a model is the next module’s task. A missing runtime, failed dependency, or storage problem needs repair first. If hermes itself is not found, check the shell refresh and installer output before trying unrelated packages. A successful help screen is useful evidence, but it does not yet prove that a model can respond.",
          },
          {
            type: "text",
            platform: "mac",
            text: "Default source-install locations: code under ~/.hermes/hermes-agent/, launcher at ~/.local/bin/hermes, and user data under ~/.hermes/. Keep the user data directory; it holds settings, memory, and sessions.",
          },
          {
            type: "text",
            platform: "linux",
            text: "Default source-install locations: code under ~/.hermes/hermes-agent/, launcher at ~/.local/bin/hermes, and user data under ~/.hermes/. In WSL2 these are Linux paths, separate from your Windows user files.",
          },
          {
            type: "text",
            platform: "windows",
            text: "The default native source install uses %LOCALAPPDATA%\\hermes\\hermes-agent\\ for code, %LOCALAPPDATA%\\hermes\\bin\\ for launchers, and %LOCALAPPDATA%\\hermes\\ for user data. Keep your data when repairing an installation.",
          },
          {
            type: "callout",
            title: "Platform details can differ",
            text: "The linked support matrix distinguishes supported platforms, package types, and optional feature limits. These locations describe the standard source installer; packaged Desktop installs have a different application layout.",
          },
        ],
        exercise: {
          title: "Verify your baseline",
          steps: [
            "Open a fresh terminal in your selected installation environment.",
            "Run hermes --help and confirm that it prints the command reference.",
            "Run hermes doctor, resolve runtime errors, and note the correct user data directory.",
          ],
        },
        quiz: {
          question:
            "Which diagnostic result belongs to the provider setup step rather than reinstalling Hermes?",
          options: [
            "Provider authentication is missing before you have configured a provider",
            "The launcher cannot be found after checking PATH",
            "The installed runtime cannot start",
          ],
          correct: 0,
          explanation:
            "An unconfigured provider is expected before the next module. Launcher and runtime failures are installation issues.",
        },
        sources: [
          source(
            "Installation and troubleshooting",
            "getting-started/installation",
          ),
          source("Platform support", "getting-started/platform-support"),
          source("Quickstart diagnostics", "getting-started/quickstart"),
        ],
      },
    ],
  },
  {
    id: "models",
    title: "Connect its brain",
    subtitle:
      "Pick a provider, protect your credentials, and understand local models.",
    minutes: 15,
    tag: "CONFIGURE",
    icon: "SlidersHorizontal",
    lessons: [
      {
        id: "models-provider",
        title: "Choose one model provider",
        summary:
          "Hermes is the agent; the provider supplies the model that reasons and calls tools.",
        blocks: [
          {
            type: "text",
            text: "Installing Hermes does not connect a model automatically in every setup. The agent needs an authenticated provider and a selected model. Start with one working route; you can change providers later without rebuilding your skills or memories.",
          },
          {
            type: "code",
            label: "Terminal — guided provider and model selection",
            code: "hermes model",
          },
          {
            type: "list",
            items: [
              "Nous Portal: an optional subscription route. Authenticate using the wizard’s OAuth flow. The documented quick setup also enables its Tool Gateway.",
              "OpenRouter: bring an API key from your own OpenRouter account and choose an available agentic model. Usage is billed by your provider.",
              "ChatGPT or Codex Subscription: choose that entry if your account is eligible; follow the displayed device authentication flow.",
              "Other providers or local models: choose them from the current picker. Available models and account entitlements can change.",
            ],
          },
          {
            type: "code",
            label:
              "Optional Nous Portal shortcut — choose this route only if you want it",
            code: "hermes setup --portal\nhermes portal info",
          },
          {
            type: "text",
            text: "Choose a model capable of tool calling. The official quickstart requires at least 64,000 tokens of context; a small chat-only model can be a poor match for multi-step agent work. Use the current provider catalog rather than copying an old model name from a tutorial.",
          },
          {
            type: "callout",
            title: "One clean conversation comes first",
            text: "Keep routing, fallback providers, and auxiliary overrides at their defaults while you establish a working chat. More configuration makes authentication problems harder to isolate.",
          },
        ],
        exercise: {
          title: "Save one working route",
          steps: [
            "Run hermes model and choose one provider you can access.",
            "Authenticate in your own terminal or the provider’s browser flow.",
            "Choose an available tool-capable model with sufficient context and start a new Hermes chat.",
          ],
        },
        quiz: {
          question: "What is the best first provider setup?",
          options: [
            "Configure every provider and fallback immediately",
            "One authenticated provider and a verified working model",
            "Pick any model name without checking availability",
          ],
          correct: 1,
          explanation:
            "A single verified route gives you a reliable baseline before advanced configuration.",
        },
        sources: [
          source("Provider quickstart", "getting-started/quickstart"),
          source("Configuring models", "user-guide/configuring-models"),
          source("Provider catalog", "integrations/providers"),
        ],
      },
      {
        id: "models-config",
        title: "Verify settings and keep keys private",
        summary:
          "Inspect the active provider and learn where Hermes stores settings and authentication.",
        blocks: [
          {
            type: "text",
            text: "Use the wizard to enter API keys rather than posting them in a course, chat, screenshot, or source repository. It places values in the correct local storage. On a standard POSIX install, ordinary settings live in ~/.hermes/config.yaml, API keys live in ~/.hermes/.env, and OAuth credentials use authentication storage such as auth.json. Native Windows uses its Hermes data directory under %LOCALAPPDATA%\\hermes\\.",
          },
          {
            type: "code",
            label: "Terminal — inspect non-secret model settings",
            code: "hermes config get model --json\nhermes status\nhermes doctor",
          },
          {
            type: "text",
            text: "Confirm that the displayed provider and model match your choice. A model entry alone does not prove your account can call it: the next lesson verifies an actual response. If authentication fails, rerun hermes model and check the provider account’s credit, subscription eligibility, and model availability.",
          },
          {
            type: "text",
            text: "The config command routes dotted settings to YAML and uppercase environment-variable names to .env. For example, terminal.backend is a setting; OPENROUTER_API_KEY is a credential. You do not need to hand-edit those files to complete this course. Backups containing .env or auth.json need the same care as the original credentials.",
          },
          {
            type: "callout",
            title: "Config changes and live conversations",
            text: "A saved model choice applies to new chats. An already running conversation may keep its current model. Use /model inside a chat to change it there, or start a new session after saving your default.",
          },
        ],
        exercise: {
          title: "Check your active configuration",
          steps: [
            "Run the inspection commands and confirm the selected provider and model.",
            "Keep any real keys out of screenshots, your course notes, and your Git repository.",
            "If you changed the default model, start a new chat to test it.",
          ],
        },
        quiz: {
          question:
            "Where should you supply a real provider API key for this course?",
          options: [
            "In a public GitHub issue",
            "In this website’s lesson notes",
            "In your local Hermes setup wizard",
          ],
          correct: 2,
          explanation:
            "Hermes’s local wizard writes credentials to appropriate local storage. Course notes are not a credential manager.",
        },
        sources: [
          source("Configuration guide", "user-guide/configuration"),
          source("Model changes and sessions", "user-guide/configuring-models"),
        ],
      },
      {
        id: "models-local",
        title: "Cloud or local: choose deliberately",
        summary:
          "Learn the managed local-model route without making it a prerequisite for starting.",
        blocks: [
          {
            type: "text",
            text: "Cloud models are usually the fastest route to your first useful result: inference runs at the provider, and your account covers its usage. Local models run inference on your machine, avoiding cloud model charges for those calls, but require model downloads, disk space, memory, and time. Neither option is automatically best for every task.",
          },
          {
            type: "code",
            label: "Terminal — optional managed local-model setup",
            code: "hermes model",
          },
          {
            type: "text",
            text: "Choose Local models in the current picker. The official managed flow lists models against your hardware, installs a pinned llama.cpp engine, downloads your choice, starts the server, and sets it as your default. Inspect the memory-fit, context, and download-size information before accepting. A model that spills into system RAM may work more slowly than one that fits your GPU.",
          },
          {
            type: "list",
            items: [
              "Prefer a recommended model that fits your machine and supports useful agent tasks. The official local guide explains its 64K-context guarantees for recommended models.",
              "Already use Ollama or LM Studio? The custom-endpoint route is also documented. Verify the server address, actual model ID, and context capacity.",
              "In WSL2, a server on Windows may require networking configuration; localhost is not interchangeable across every setup.",
              "A local main model does not make cloud web search, browser services, or other separately configured integrations local.",
            ],
          },
          {
            type: "callout",
            title: "Keep the first route simple",
            text: "You can finish the crash course with a cloud model. Try local inference afterward using the same small task, then compare correctness, latency, and resource use before switching your daily workflow.",
          },
        ],
        exercise: {
          title: "Make a practical model choice",
          steps: [
            "Choose cloud for your first run, or inspect Local models without committing to a large download.",
            "If choosing local, check hardware fit and follow the managed prompts; otherwise keep your verified cloud route.",
            "Run the same first-task prompt on the route you selected and judge the actual result.",
          ],
        },
        quiz: {
          question:
            "Does using a local main model guarantee all enabled integrations stay offline?",
          options: [
            "Yes, every tool automatically becomes local",
            "No; separately configured tools can still contact cloud services",
            "Yes, if the model has enough context",
          ],
          correct: 1,
          explanation:
            "Main-model inference and external tool services are separate parts of the configuration.",
        },
        sources: [
          source("Managed local models", "user-guide/local-models"),
          source("Provider and WSL networking guide", "integrations/providers"),
        ],
      },
    ],
  },
  {
    id: "first-task",
    title: "Complete your first real task",
    subtitle: "Verify chat, use a tool on a small task, and resume the result.",
    minutes: 15,
    tag: "HANDS ON",
    icon: "Rocket",
    lessons: [
      {
        id: "first-task-chat",
        title: "Verify a real conversation",
        summary:
          "Check that your chosen provider answers and learn the essential in-chat commands.",
        blocks: [
          {
            type: "text",
            text: "Open Hermes in the terminal where you installed it. The banner should show the model you selected and the available capabilities. This is the real agent session; the website’s lesson completion is a separate record. Start with a short request that tests the connection without depending on accounts or integrations.",
          },
          {
            type: "code",
            label: "Terminal — start an interactive session",
            code: "hermes",
          },
          {
            type: "prompt",
            label: "Paste into your Hermes conversation",
            text: "Help me design a 30-minute plan for learning Hermes Agent today. Give me three concrete steps, and ask one question about the kind of work I want to automate.",
          },
          {
            type: "text",
            text: "Answer its question and check that the second reply uses your answer. Success means the provider responds without an authentication error, the conversation continues, and the chosen model matches the banner. A polished reply alone does not prove tools work; you will verify file access next.",
          },
          {
            type: "code",
            label: "Inside Hermes — enter these one at a time",
            code: "/help\n/tools\n/usage",
          },
          {
            type: "text",
            text: "Slash commands belong inside the agent conversation; hermes model and hermes doctor belong in your ordinary terminal. /help shows the current command set, /tools shows available tools, and /usage reports the session’s usage details. If a task goes off track, Ctrl+C interrupts it so you can redirect the agent.",
          },
          {
            type: "callout",
            title: "Optional terminal interface",
            text: "The official modern terminal UI can be launched with hermes --tui. It uses the same configuration and sessions; the standard hermes command is enough for the exercises.",
          },
        ],
        exercise: {
          title: "Prove that chat works",
          steps: [
            "Start hermes and confirm the provider/model shown in its banner.",
            "Send the planning prompt, answer its follow-up, and verify a second response.",
            "Try /help, /tools, and /usage inside the conversation.",
          ],
        },
        quiz: {
          question: "Where do you type /tools?",
          options: [
            "Inside the Hermes conversation",
            "In this website’s address bar",
            "In the provider’s API-key field",
          ],
          correct: 0,
          explanation:
            "Slash commands run inside an active Hermes session; hermes subcommands run in your shell.",
        },
        sources: [
          source("First-chat quickstart", "getting-started/quickstart"),
          source("CLI guide", "user-guide/cli"),
        ],
      },
      {
        id: "first-task-file",
        title: "Turn a task list into an action plan",
        summary:
          "Give Hermes a small input file, explicit boundaries, and an output you can check.",
        blocks: [
          {
            type: "text",
            text: "Create an empty practice folder using your file manager. In that folder, save a plain-text file named tasks.txt with the sample below. Open a terminal in that folder and run hermes. This gives the agent a small, visible task instead of vague instructions to organize your whole life.",
          },
          {
            type: "code",
            label: "Sample content for tasks.txt — save as a text file",
            code: "Send revised proposal to Sam by Friday. Estimated work: 45 minutes.\nPrepare questions for tomorrow’s project meeting. Estimated work: 20 minutes.\nCompare three invoicing tools next week. Estimated work: 60 minutes.\nSchedule a dentist appointment. Estimated work: 10 minutes.",
          },
          {
            type: "prompt",
            label: "Paste into Hermes from your practice folder",
            text: "Read only tasks.txt in the current folder. Create plan.md here with a table of the four tasks, a suggested order, time estimates, and the next action for each. Preserve the estimates I supplied. Treat relative dates as uncertain until I confirm the actual dates. Do not send messages, book appointments, or change other files. After creating it, read plan.md back and verify that all four tasks appear exactly once.",
          },
          {
            type: "text",
            text: "Watch for a real file read and a file write in the tool output. Open plan.md yourself: the artifact is your evidence. Check that all four tasks appear, the estimates are intact, and dates were not invented. If file tools are unavailable, enable the relevant toolsets with hermes tools and retry in a new session.",
          },
          {
            type: "callout",
            title: "The prompt is a working agreement",
            text: "Naming a folder and forbidden actions improves task clarity. It does not create an operating-system sandbox. Use a practice folder with sample data while you learn the agent’s behavior.",
          },
        ],
        exercise: {
          title: "Produce and check a useful artifact",
          steps: [
            "Create the practice folder and tasks.txt with the sample content.",
            "Start Hermes there and send the scoped prompt.",
            "Open plan.md yourself and check all four tasks, estimates, and date handling.",
          ],
        },
        quiz: {
          question: "What proves the file task succeeded?",
          options: [
            "The agent says it is done",
            "You inspect plan.md and verify the requirements",
            "The course progress bar increases",
          ],
          correct: 1,
          explanation:
            "Inspecting the actual output catches omissions or invented details that a completion message can miss.",
        },
        sources: [
          source("Quickstart tool verification", "getting-started/quickstart"),
          source("Tools and toolsets", "user-guide/features/tools"),
        ],
      },
      {
        id: "first-task-resume",
        title: "Resume and troubleshoot with evidence",
        summary:
          "Keep the useful conversation, check actual usage, and diagnose the right layer.",
        blocks: [
          {
            type: "text",
            text: "Before leaving the working session, give it a recognizable title. This makes it easier to return to the task. You can then exit the conversation and resume from your shell. CLI sessions are stored in the Hermes SQLite state database; they are not stored in this course website.",
          },
          {
            type: "code",
            label: "Inside Hermes — name the working session",
            code: "/title My first Hermes task\n/usage",
          },
          {
            type: "code",
            label: "Terminal — return after exiting the session",
            code: "hermes sessions list\nhermes --continue",
          },
          {
            type: "prompt",
            label: "Check continuity in the resumed session",
            text: "Which file did we create, and what four tasks did it contain? Read plan.md again before answering. Identify one improvement to the plan, but do not edit the file yet.",
          },
          {
            type: "text",
            text: "Check both recalled context and the current file. Continuing an old conversation restores conversation history; it is different from the persistent memory and reusable skills you will configure later. If the wrong conversation resumes, inspect the session list and confirm you are using the same Hermes profile and installation.",
          },
          {
            type: "code",
            label: "Terminal — diagnose a broken baseline",
            code: "hermes doctor\nhermes config get model --json\nhermes status",
          },
          {
            type: "list",
            items: [
              "Authentication or model error: rerun hermes model and check provider access.",
              "Missing file: verify the current folder and exact filename.",
              "Tool unavailable: inspect /tools and use hermes tools to configure the needed access.",
              "Unexpected spending: compare /usage with the provider’s billing dashboard; estimates and subscription accounting can differ.",
            ],
          },
          {
            type: "callout",
            title: "Your baseline is ready",
            text: "Move on when you have a real response, a verified tool-produced file, and a successfully resumed session. Those three checks establish the foundation for memory, skills, and automation.",
          },
        ],
        exercise: {
          title: "Finish the baseline checks",
          steps: [
            "Title your working session and inspect /usage.",
            "Exit, run hermes sessions list, and resume with hermes --continue.",
            "Ask Hermes to reread the file and confirm the result before moving on.",
          ],
        },
        quiz: {
          question: "What does hermes --continue restore?",
          options: [
            "The website’s course checklist",
            "A brand-new empty conversation",
            "The most recent Hermes CLI session",
          ],
          correct: 2,
          explanation:
            "The command resumes stored Hermes conversation history; website progress is separate.",
        },
        sources: [
          source("Session continuation", "user-guide/cli"),
          source("Quickstart recovery toolkit", "getting-started/quickstart"),
        ],
      },
    ],
  },
];
