work in progress

# Portfolio

![portfolioKF](https://github.com/katarzynaFronc/Portfolio/assets/111447530/844c2358-7c7b-4e00-b5c2-775021f11406)

This project is an elegant and interactive showcase of my work. I used React, TypeScript and Vite to create it. It was designed with a modern aesthetic, using Sass for styling and Material-UI components and Particles backgrounds for a clean and professional look. </br>
The portfolio is not only a collection of my past work, but also a showcase of my ability to create efficient and user-friendly applications.</br>
One of the standout features is the integrated email form, which uses EmailJS to send messages directly from the contact page without the need for a backend. This feature simplifies the communication process and ensures that potential clients or employers can easily contact me.</br>
The portfolio demonstrates my ability to use the latest technologies and best practices in web development, providing visitors with a seamless experience and showcasing my expertise in React and TypeScript.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
