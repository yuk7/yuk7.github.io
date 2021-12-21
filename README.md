# yuk7.github.io
My personal website.

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/yuk7/yuk7.github.io/Node.js%20Build%20CI?style=flat-square)
![License](https://img.shields.io/github/license/yuk7/yuk7.github.io.svg?style=flat-square)

## Environment
### Language
* Vue
* JavaScript
* TypeScript
### Package Management
* npm
* dependabot
### Library and Frameworks
* Vue 3
* Vuetify 3 Alpha
* Axios
* lodash
### Hosting and CI
* GitHub Pages (main branch)
* GitHub

## How to get started
```bash
# Install dependencies
npm install

# Serve with hot reload at localhost:8080
npm run serve

# Build for production
npm run build
```

## Directory structures
```
.
|-.github
|   |-workflows
|   |   |-build.yml (only build when pushed)
|   |   |-deploy,yml (build and push to main when pushed to source branch
|
|-public (file generate template)
|   |-index.html (modified for supports SPA in GitHub Pages)
|   |-404.html (redirects to index.html for supports SPA in GitHub Pages)
|   |-* (assets, not related to main code)
|
|-src (source file directory)
|   |-main.ts (entry point script)
|   |-App.vue (main view)
|   |-router
|   |   |-index.ts (vue router config)
|   |-views
|   |   |-_NotFoundView.vue (not found page)
|   |   |-*.vue (sub pages)
```
