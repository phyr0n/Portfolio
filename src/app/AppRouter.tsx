import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { paths } from '@/config/paths';
import HomeRoute from '@/features/home/components/HomeRoute';
import AboutRoute from '@/features/about/components/AboutRoute';
import ProjectsRoute from '@/features/projects/components/ProjectsRoute';
import ProjectDetailRoute from '@/features/projects/components/ProjectDetailRoute';
import ContactRoute from '@/features/contact/components/ContactRoute';
import UnknownPageRoute from '@/features/unknown-page/components/UnknownPageRoute';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: paths.home.path, element: <HomeRoute /> },
      { path: paths.about.path, element: <AboutRoute /> },
      { path: paths.projects.path, element: <ProjectsRoute /> },
      { path: paths.projectDetail.path, element: <ProjectDetailRoute /> },
      { path: paths.contact.path, element: <ContactRoute /> },
      { path: '*', element: <UnknownPageRoute /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
