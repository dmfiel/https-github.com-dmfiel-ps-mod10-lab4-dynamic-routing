# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
      // other options...
    }
  }
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
      // other options...
    }
  }
]);
```

Lab 4 Instructions: @here :mega:
Build a Basic Multi-Page Application
Objective: Create a simple React application with Home, About, and Posts pages using React Router.
Instructions:
Set up a new React project or use an existing one.
Install react-router-dom.
Create three components: HomePage, AboutPage, and PostsPage.
In your main App component:
Wrap your application with <BrowserRouter>.
Set up a navigation bar using <Link> components to navigate between these pages.
Define routes using <Routes> and <Route> to render the appropriate component for /, /about, and /posts.
Ensure clicking the links correctly changes the view without a full page reload.
Implement Route Parameters for Posts Details
Objective: Extend the previous application to display details for a specific post using route parameters.
Instructions:
Create a PostDetailPage component.
Modify the PostsPage component:
Fetch the posts data from https://dummyjson.com/docs/posts.
Each post title should be a <Link> that navigates to a unique URL for that post, like /posts/1, /posts/2.
In your App component, add a new route: <Route path="/posts/:postId" element={<PostDetailPage />} />.
In the PostDetailPage component:
Use the useParams hook to extract the postId from the URL.
Fetch the post data using the postId.
Display the product information.
Verify that navigating to a product detail URL shows the correct post ID.
DummyJSONDummyJSON
Posts - DummyJSON - Free Fake REST API for Placeholder JSON Data
REST Endpoints filled with Posts JSON data, DummyJSON provides a free fake REST API with placeholder JSON data for development, testing, and prototyping. Access realistic data quickly for your projects. (302 kB)
