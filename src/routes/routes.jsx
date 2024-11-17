import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import Projects from '../pages/projects/Projects';
import About from '../pages/about/About';
import Services from '../pages/services/Services';

const routes = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
        index: true,
      },
      { path: 'home', element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
    ],
  },
]);

export default routes;
