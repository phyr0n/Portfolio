import { useParams } from 'react-router-dom';
import { ProjectDetailRoute } from '@/features/projects/components/project-detail-route';

export default function ProjectDetailPage() {
  const params = useParams<{ projectId: string }>();

  if (!params.projectId) {
    return null;
  }

  return <ProjectDetailRoute projectId={params.projectId} />;
};