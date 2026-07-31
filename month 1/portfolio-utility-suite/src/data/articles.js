export const articles = [
  {
    id: 'css-grid',
    title: 'Understanding CSS Grid',
    subtitle: 'Overview',
    author: 'Ayesha Siddiqui',
    date: '2026-07-17',
    dateLabel: 'July 17, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80',
    imageAlt: 'A developer writing CSS code on a laptop',
    excerpt:
      'CSS Grid is one of the most powerful layout systems in modern CSS. It lets you define rows and columns simultaneously, giving you full two-dimensional control over your layouts with minimal code.',
    sections: [
      {
        heading: 'What is CSS Grid?',
        subheading: 'Overview',
        content: [
          'CSS Grid Layout is a two-dimensional layout system built directly into CSS. Unlike Flexbox, which handles one axis at a time, Grid lets you control both rows and columns simultaneously — making it ideal for page-level layouts and complex UI components.',
          'Before Grid, developers relied on floats, tables, and positioning hacks to build layouts. Grid replaces all of that with a clean, declarative syntax.',
        ],
      },
      {
        heading: 'Core Concepts',
        subheading: 'Defining a Grid',
        content: [
          'You turn any element into a grid container with display: grid. From there, you define columns and rows using grid-template-columns and grid-template-rows.',
        ],
        code: `.container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 24px;\n}`,
        afterCode:
          'The 1fr unit means "one fraction of the available space", so repeat(3, 1fr) creates three equal columns that share the container width.',
      },
      {
        subheading: 'Placing Items',
        content: [
          'Grid items can be placed explicitly using line numbers, or left to auto-placement. You can span items across multiple columns or rows with grid-column and grid-row.',
        ],
        code: `.featured {\n    grid-column: 1 / 3; /* spans columns 1 and 2 */\n    grid-row: 1 / 2;\n}`,
      },
      {
        heading: 'Responsive Grids',
        subheading: 'Using auto-fit and minmax',
        content: [
          'One of Grid\'s most powerful patterns is combining auto-fit with minmax() to create fully responsive layouts without any media queries.',
        ],
        code: `.grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 20px;\n}`,
        blockquote:
          'This single line of CSS creates a grid that automatically adjusts the number of columns based on the available space — no breakpoints needed.',
      },
      {
        heading: 'Conclusion',
        content: [
          'CSS Grid is one of the most impactful additions to CSS in years. Once you understand its core concepts — containers, tracks, lines, and areas — you\'ll reach for it naturally any time you need structured layout control.',
        ],
      },
    ],
  },
  {
    id: 'js-es6',
    title: 'JavaScript ES6 Features',
    subtitle: 'Highlights',
    author: 'Usman Tariq',
    date: '2026-07-15',
    dateLabel: 'July 15, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=1200&q=80',
    imageAlt: 'JavaScript code on a screen',
    excerpt:
      'ES6 transformed the way we write JavaScript. Arrow functions, template literals, destructuring assignments, and native modules make your code shorter, cleaner, and far easier to maintain.',
    sections: [
      {
        heading: 'Why ES6 Changed Everything',
        subheading: 'Highlights',
        content: [
          'ES2015 (ES6) was the largest update to JavaScript since its creation. It addressed years of developer frustration with verbose syntax, awkward scoping, and missing language features. Here are the changes you\'ll use every day.',
        ],
      },
      {
        heading: 'Arrow Functions',
        subheading: 'Shorter Syntax',
        content: [
          'Arrow functions give you a concise way to write function expressions, and they inherit this from their surrounding scope — solving one of the most common JS gotchas.',
        ],
        code: `// Before ES6\nconst double = function(n) { return n * 2; };\n\n// ES6 arrow function\nconst double = n => n * 2;`,
      },
      {
        heading: 'Destructuring',
        subheading: 'Unpacking Values',
        content: [
          'Destructuring lets you pull values out of arrays or objects into variables in a single, readable line.',
        ],
        code: `const user = { name: 'Sara', age: 28, city: 'Nairobi' };\nconst { name, city } = user;\n\nconst [first, second] = [10, 20, 30];`,
      },
      {
        heading: 'Template Literals',
        subheading: 'String Interpolation',
        content: [
          'Template literals use backticks and ${} placeholders, replacing messy string concatenation with readable inline expressions.',
        ],
        code: `const greeting = \`Hello, \${name}! You are \${age} years old.\`;`,
      },
      {
        heading: 'Modules',
        subheading: 'Import and Export',
        content: [
          'ES6 modules give JavaScript a native way to split code across files, replacing script-tag soup and IIFE patterns.',
        ],
        code: `// math.js\nexport const add = (a, b) => a + b;\n\n// main.js\nimport { add } from './math.js';`,
        blockquote:
          "ES6 didn't just add features — it changed the way JavaScript developers think about writing clean, maintainable code.",
      },
      {
        heading: 'Conclusion',
        content: [
          'Arrow functions, destructuring, template literals, and modules are now fundamental JavaScript. Mastering these features will make your code shorter, cleaner, and much easier to work with on any modern project.',
        ],
      },
    ],
  },
  {
    id: 'responsive-design',
    title: 'Responsive Web Design',
    subtitle: 'Why It Matters',
    author: 'Sana Malik',
    date: '2026-07-10',
    dateLabel: 'July 10, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80',
    imageAlt: 'Multiple devices showing a responsive website',
    excerpt:
      'Over 60% of web traffic comes from mobile devices. Responsive design using flexible grids, fluid images, and targeted media queries ensures your site looks great on every screen size.',
    sections: [
      {
        heading: 'The Mobile-First Reality',
        subheading: 'Why It Matters',
        content: [
          'Over 60% of global web traffic now comes from mobile devices. A website that only looks good on a desktop is already failing the majority of its visitors. Responsive design ensures every user gets a great experience regardless of screen size.',
        ],
      },
      {
        heading: 'The Three Pillars',
        subheading: 'Flexible Grids',
        content: [
          'Use relative units like percentages and fr instead of fixed pixel widths. Your layout should stretch and shrink fluidly as the viewport changes.',
        ],
        code: `.container {\n    width: 90%;\n    max-width: 1200px;\n    margin: 0 auto;\n}`,
      },
      {
        subheading: 'Fluid Images',
        content: [
          'Images should never overflow their containers. Setting max-width: 100% on images is a simple rule that prevents horizontal scrollbars and broken layouts on small screens.',
        ],
        code: `img {\n    max-width: 100%;\n    height: auto;\n    display: block;\n}`,
      },
      {
        subheading: 'Media Queries',
        content: [
          'Media queries let you apply different CSS rules at specific viewport widths. The mobile-first approach means you write base styles for small screens, then add breakpoints for larger ones.',
        ],
        code: `/* Base: mobile */\n.grid { grid-template-columns: 1fr; }\n\n/* Tablet */\n@media (min-width: 600px) {\n    .grid { grid-template-columns: repeat(2, 1fr); }\n}\n\n/* Desktop */\n@media (min-width: 900px) {\n    .grid { grid-template-columns: repeat(3, 1fr); }\n}`,
        blockquote:
          'Design for the smallest screen first, then progressively enhance the experience for larger viewports.',
      },
      {
        heading: 'Conclusion',
        content: [
          'Responsive design is not optional — it\'s the baseline expectation for every website. Combining flexible grids, fluid images, and smart media queries gives you a solid foundation that works everywhere.',
        ],
      },
    ],
  },
  {
    id: 'react-intro',
    title: 'Getting Started with React',
    subtitle: 'Key Concepts',
    author: 'Bilal Chaudhry',
    date: '2026-07-08',
    dateLabel: 'July 8, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    imageAlt: 'React component code on a monitor',
    excerpt:
      "React's component-based model makes UIs predictable and easy to debug. Understand how props pass data down, how state drives re-renders, and how hooks replaced class lifecycle methods.",
    sections: [
      {
        heading: 'What is React?',
        subheading: 'Key Concepts',
        content: [
          'React is a JavaScript library for building user interfaces. Developed by Meta, it introduced the idea of breaking UIs into small, reusable components — each managing its own logic and appearance.',
          "Instead of manually updating the DOM, you describe what the UI should look like for a given state, and React figures out the minimal set of changes needed to get there.",
        ],
      },
      {
        heading: 'Components',
        subheading: 'Building Blocks',
        content: [
          'A React component is a JavaScript function that returns JSX — a syntax that looks like HTML but lives inside your JS file. Components can be composed together to build complex UIs from simple pieces.',
        ],
        code: `function Button({ label, onClick }) {\n    return (\n        <button onClick={onClick}>\n            {label}\n        </button>\n    );\n}`,
      },
      {
        heading: 'Props and State',
        subheading: 'Data Flow',
        content: [
          'Props are read-only values passed from a parent component to a child. State is internal data that a component owns and can change over time. When state changes, React re-renders the component automatically.',
        ],
        code: `import { useState } from 'react';\n\nfunction Counter() {\n    const [count, setCount] = useState(0);\n\n    return (\n        <div>\n            <p>Count: {count}</p>\n            <button onClick={() => setCount(count + 1)}>\n                Increment\n            </button>\n        </div>\n    );\n}`,
        blockquote:
          "React's one-way data flow makes it easy to trace where your data comes from and predict how your UI will behave.",
      },
      {
        heading: 'Conclusion',
        content: [
          "React's component model, props, and state form the foundation of everything else in the ecosystem. Once these click, concepts like hooks, context, and routing become much easier to pick up.",
        ],
      },
    ],
  },
  {
    id: 'rest-apis',
    title: 'REST APIs Explained',
    subtitle: 'How They Work',
    author: 'Zara Khan',
    date: '2026-07-05',
    dateLabel: 'July 5, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80',
    imageAlt: 'Server rack representing backend APIs',
    excerpt:
      'REST APIs power virtually every modern web app. Learn how resources map to URLs, how HTTP verbs define actions, and how to handle responses and error codes cleanly.',
    sections: [
      {
        heading: 'What is a REST API?',
        subheading: 'How They Work',
        content: [
          'REST (Representational State Transfer) is an architectural style for building web APIs. A REST API exposes resources — like users, posts, or products — via URLs, and clients interact with those resources using standard HTTP methods.',
          'REST APIs are stateless, meaning each request contains everything the server needs to respond. There\'s no session stored on the server between requests.',
        ],
      },
      {
        heading: 'HTTP Methods',
        subheading: 'The Four Core Verbs',
        content: ['Each HTTP method maps to a CRUD operation on a resource:'],
        code: `GET    /articles       → list all articles\nGET    /articles/1     → get article with id 1\nPOST   /articles       → create a new article\nPUT    /articles/1     → update article with id 1\nDELETE /articles/1     → delete article with id 1`,
      },
      {
        heading: 'Status Codes',
        subheading: 'What the Server Is Telling You',
        content: [
          'HTTP status codes tell the client whether a request succeeded or why it failed. Knowing the common ones saves hours of debugging.',
        ],
        code: `200 OK            – success\n201 Created       – resource was created (POST)\n400 Bad Request   – invalid input from client\n401 Unauthorized  – authentication required\n404 Not Found     – resource doesn't exist\n500 Server Error  – something broke on the server`,
        blockquote:
          'A well-designed REST API is self-descriptive — the URL tells you what the resource is, the method tells you what to do with it, and the status code tells you what happened.',
      },
      {
        heading: 'Consuming an API',
        subheading: 'Using fetch in JavaScript',
        content: [
          "The browser's built-in fetch function makes it straightforward to call a REST API from any JavaScript application.",
        ],
        code: `const response = await fetch('https://api.example.com/articles');\nconst articles = await response.json();\nconsole.log(articles);`,
      },
      {
        heading: 'Conclusion',
        content: [
          'REST APIs are the universal language of the web. Understanding resources, HTTP methods, and status codes gives you the foundation to work with any API — whether you\'re building one or consuming one.',
        ],
      },
    ],
  },
  {
    id: 'git-version-control',
    title: 'Git & Version Control',
    subtitle: 'Why Every Dev Needs It',
    author: 'Hamza Iqbal',
    date: '2026-07-01',
    dateLabel: 'July 1, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
    imageAlt: 'Terminal showing git commands',
    excerpt:
      "Git lets you snapshot your work, experiment safely on branches, and collaborate without overwriting each other's changes. It's the one tool that every developer relies on daily.",
    sections: [
      {
        heading: 'What is Git?',
        subheading: 'Why Every Dev Needs It',
        content: [
          'Git is a distributed version control system that tracks changes to your files over time. Every change you make is recorded as a snapshot called a commit, giving you a full history of your project that you can navigate, compare, and revert at any point.',
          'Without Git, collaborating on code means emailing files, manually merging changes, and hoping nothing gets overwritten. With Git, all of that is handled cleanly and safely.',
        ],
      },
      {
        heading: 'Essential Commands',
        subheading: 'Day-to-Day Workflow',
        content: ['Most of your daily Git work comes down to a handful of commands:'],
        code: `git init              # start tracking a project\ngit add .             # stage all changes\ngit commit -m "msg"   # save a snapshot\ngit status            # see what's changed\ngit log               # view commit history`,
      },
      {
        heading: 'Branching',
        subheading: 'Working in Parallel',
        content: [
          'Branches let you work on a new feature or bug fix in isolation without affecting the main codebase. When the work is done, you merge it back.',
        ],
        code: `git branch feature/login    # create a branch\ngit checkout feature/login  # switch to it\ngit merge feature/login     # merge back to main`,
        blockquote:
          'A good branching strategy is the difference between a calm release and a chaotic one. Branch early, commit often, and merge with intent.',
      },
      {
        heading: 'Working with GitHub',
        subheading: 'Remote Repositories',
        content: [
          'GitHub hosts your Git repository in the cloud, making it easy to back up your work and collaborate with others. The core remote workflow is push and pull.',
        ],
        code: `git remote add origin https://github.com/user/repo.git\ngit push -u origin main     # push to GitHub\ngit pull origin main        # get latest changes`,
      },
      {
        heading: 'Conclusion',
        content: [
          'Git is non-negotiable for any serious developer. Start simple — init, add, commit, push — and the more advanced concepts like branching and rebasing will come naturally as you use it every day.',
        ],
      },
    ],
  },
]
