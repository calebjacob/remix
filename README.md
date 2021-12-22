# Remix

A starter project ready to rock and roll!

- [TypeScript](https://www.typescriptlang.org/)
- [Remix](https://remix.run)
- [SCSS](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Font Awesome 5](https://fontawesome.com/icons?d=gallery&p=2)

## Conventions & Documentation

- [Styles](docs/styles.md)
- [Testing](docs/testing.md)
- [Deploying With Dokku](docs/dokku.md)
- [VS Code Snippets](docs/vs-code-snippets.md)

## Getting Started

To get started, make sure you have NVM installed to manage your current version of Node and NPM:

```sh
brew install nvm
```

Once NVM has been installed, navigate to the project's root directory and run:

```sh
nvm install
nvm use
```

Now install all of the project's dependencies via NPM:

```sh
npm ci
```

You'll need to set up a local `.env` file to declare our required environment variables. You can copy the example file to get up and running locally:

```sh
cp .env.example .env
```

Finally, you can start up the application:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes. If you make a change to your `.env` file, you'll need to quit the `npm run dev` process and restart.

## Testing

TODO...

## Linting

To lint and fix all code:

```sh
npm run lint
```
