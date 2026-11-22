import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/components/layout/main-layout';
import { paths } from '@/config/paths';
import { HomeRoute } from '@/features/home/components/home-route';
import { AboutRoute } from '@/features/about/components/about-route';
import { ProjectsRoute } from '@/features/projects/components/projects-route';
import { ProjectDetailRoute } from '@/features/projects/components/project-detail-route';
import { ContactRoute } from '@/features/contact/components/contact-route';
import { UnknownPageRoute } from '@/features/unknown-page/components/unknown-page-route';

export const createAppRouter = () =>
  createBrowserRouter([
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

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
