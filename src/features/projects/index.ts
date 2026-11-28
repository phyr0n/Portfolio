export { default as ProjectsRoute } from './components/ProjectsRoute';
export { default as ProjectDetailRoute } from './components/ProjectDetailRoute';
export { default as ProjectCard } from './components/ProjectCard';
export { default as ProjectsRow } from './components/ProjectsRow';
export { ProjectMarquee } from './components/project-marquee';
export { default as ProjectMediaCarousel } from './components/ProjectMediaCarousel';
export { default as ProjectStatusBadge } from './components/ProjectStatusBadge';
export { projects, getProjectById } from './data/projects';
export type {
  Project,
  ProjectStatus,
  ProjectCategory,
  ProjectSection,
  ProjectMediaItem,
  MarqueeArt,
  MarqueeVariant,
} from './types/project';
