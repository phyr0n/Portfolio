export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },
  about: {
    path: '/about',
    getHref: () => '/about',
  },
  projects: {
    path: '/projects',
    getHref: () => '/projects',
  },
  projectDetail: {
    path: '/projects/:projectId',
    getHref: (projectId: string) => `/projects/${projectId}`,
  },
  contact: {
    path: '/contact',
    getHref: () => '/contact',
  },
} as const;
