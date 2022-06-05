# FurniMall: e-commerce project

## Tools:

- HTML

- CSS

- React

- React-Router

- TypeScript

- Styled-Components

#### For Netlify: fixing Routing

in `public` directory create file `_redirects`

```
/*    /index.html   200

```

#### For Netlify deploying

```js
"scripts": {
    "start": "react-scripts start",
    "build": "CI= react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "netlify": "netlify dev",
    "dev": "netlify dev"
  },
```

### For Stripe install / special version

---

npm install dotenv@8.2.0 stripe@8.130.0 @stripe/react-stripe-js@1.1.2 @stripe/stripe-js@1.11.0 netlify@6.0.12

---

npm i dotenv

npm i stripe

npm i @stripe/stripe-js

npm i @stripe/react-stripe-js

npm i netlify

npm install dotenv stripe @stripe/stripe-js @stripe/react-stripe-js netlify
