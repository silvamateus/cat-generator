## Instructions

### Run locally
- Install [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- Install [Vue-cli (beta version)](https://github.com/vuejs/vue-cli) with Yarn: run `yarn global add @vue/cli`
- Clone this repository
- Create an account in [OpenWeatherMap](https://openweathermap.org)
- Generate an [API Key](https://home.openweathermap.org/api_keys)
- Create a **key.js** file in the root of the project with `export default 'your-key-here'`
- Run `yarn install`
- Run `yarn serve`

### E2E Tests
- Install [Google Chrome](https://www.google.com.br/chrome)
- Run `yarn e2e`

### Lint
- Run `yarn lint [--fix]`

### Build
- Run `yarn build`
- Serve **/dist** files in a http server
