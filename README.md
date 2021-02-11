## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
cd ~/code/<your_github_nickname>
git clone git@github.com:gabrielecanepa/js-plugins.git
cd js-plugins
rm -rf .git
yarn install
stt # open this folder in Sublime Text
```

Make sure you have `./node_modules/.bin` in your `$PATH`! This way you can launch a server with:

```bash
webpack-dev-server
```

## Packages: Ruby vs JavaScript

|                    |Ruby                  | Javascript        |
|--------------------|----------------------|-------------------|
|**Name**            |Gems                  | Packages          |
|**Registry**        |https://rubygems.org  | https://npmjs.com |
|**Package manager** |Bundler               | Yarn (or npm)     |
|**Config file**     |Gemfile               | package.json      |
