
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/pages/About.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import Project from './components/Project.jsx';
import Resume from './assets/Resume.jsx';
import Contact from './components/pages/Contact.jsx';
import App from './App.jsx';

const routers = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: 'portfolio',
          element: <Portfolio />,
        },
        {
          path: 'project',
          element: <Project />,
        },
        {
          path: 'resume',
          element: <Resume />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routers} />
)
