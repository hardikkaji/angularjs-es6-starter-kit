# AngularJS ES6 Starter Kit

### Demo Netlify: https://hardik-angularjs-kit.netlify.com/
### Demo Heroku: https://hardik-angularjs-kit.herokuapp.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/e33b05fe-f573-46bd-8a88-1c3cffa11587/deploy-status)](https://app.netlify.com/sites/hardik-angularjs-kit/deploys)   ![Heroku](https://heroku-badge.herokuapp.com/?app=hardik-angularjs-kit)

This repo contains `webpack 5`, `AngularJS`, `ES6` and `Bootstrap 4.6`starter kit.

### Prerequisites
Node 14+, Yarn

### Steps to run project
1. Clone Project.
2. Do `yarn install` to install all dependencies.
3. Finally `yarn start` to run project.

For building project use `yarn build`

### Enable Debug with VS Code
Folks, if you want to enable debugging with VSCode then you need to create `launch.json` file and add below two tasks in that file.

```
{
   "type":"node",
   "request":"launch",
   "name":"Debug",
   "program":"${workspaceFolder}/node_modules/webpack-dev-server/bin/webpack-dev-server",
   "args":[
      "--progress",
      "--debug"
   ]
},
{
   "name":"Launch Chrome against localhost, with sourcemaps",
   "type":"chrome",
   "request":"launch",
   "url":"http://localhost:3000",
   "sourceMaps":true,
   "webRoot":"${workspaceRoot}"
}
```

After adding these tasks, you need to run first debug task and then launch chrome task.
