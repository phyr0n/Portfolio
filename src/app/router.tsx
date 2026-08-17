import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/components/layout/main-layout';
import { paths } from '@/config/paths';
import HomePage from './routes/home';
import AboutPage from './routes/about';
import ProjectsPage from './routes/projects';
import ProjectDetailPage from './routes/project-detail';
import ContactPage from './routes/contact';
import NotFoundPage from './routes/not-found';

export const createAppRouter = () =>
  createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: paths.home.path, element: <HomePage /> },
        { path: paths.about.path, element: <AboutPage /> },
        { path: paths.projects.path, element: <ProjectsPage /> },
        { path: paths.projectDetail.path, element: <ProjectDetailPage /> },
        { path: paths.contact.path, element: <ContactPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
