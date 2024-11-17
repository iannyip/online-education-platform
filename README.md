# Brillian

Online coding platform
Inspired by brilliant.org, a learning platform.

## Features

- In-built code editor to run code within the app.
- Freemium model - register and log in to access locked classes and track learning progress.
- User auth and registration
- Homepage as sales funnel - a focus on aesthetics to convince/enhance credibility/encourage conversion.
- Admin login for special access to additional features.
- Mobile friendly for learning on the go.

## Technologies

- Frontend: React
- Backend: Postgresql, Express, Sequelize
- Deployment: Heroku, Webpack
- Libraries: Codemirror, React-Bootstrap
- Version Control: Git

## Thoughts

- This was my first time creating a fullstack React app.
- Backend was intentionally kept simple (3 tables) to focus on aesthetics.
- Much time was spent experimenting with code editor (monaco-editor vs code mirror vs textarea)
- Experimenting with client-side execution of input with eval() and function(). Also for security.
- Key focus: React, State management, MVC
- Business focus: Freemium model, UI/UX, sales funnel

## Development

Ensure you have postgres installed and running

```
npm install
npm run seed
npm run watch
```

View the web application on http://localhost:3004

## Deployment
