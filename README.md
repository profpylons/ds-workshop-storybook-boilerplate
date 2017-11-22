# Start you own library

```
git clone https://github.com/varya/styled-components-lib-setup.git
cd styled-components-lib-setup
rm -rf .git
git init
```


# Development
## Run Storybook

```
npm install
npm start
```

##  Build the library

```
npm run build
```

## Try out at the demo page

```
npm run demo
```

Edit sources in `demo` folder.


# Build and publish documentation

You can build Storybook documentation as a static website and publish to GH pages.

```
npm run build-storybook
npm run deploy-storybook
```
