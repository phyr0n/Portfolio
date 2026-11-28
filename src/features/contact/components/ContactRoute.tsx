import Panel from '@/components/ui/Panel';
import PageHeading from '@/components/ui/PageHeading';
import PageContainer from '@/components/layout/PageContainer';

const channels = [
  { label: 'Email', value: 'me@adamtait.net' },
  { label: 'LinkedIn', value: 'linkedin.com/in/adamtaiit' },
  { label: 'GitHub', value: 'github.com/phyr0n' },
];

export default function ContactRoute() {
  return (
    <PageContainer className="py-16 sm:py-24">
      <PageHeading>Contact me</PageHeading>
      <p className="mt-4 max-w-2xl text-text-muted">
        A more developed version of this page will be coming soon. In the meantime, feel free to connect with me below.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <Panel label="External Links" className="h-fit">
          <ul className="space-y-4">
            {channels.map((channel) => (
              <li key={channel.label} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                <p className="label-caps">
                  {channel.label}
                </p>
                <p className="mt-1 text-sm text-text">{channel.value}</p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </PageContainer>
  );
}
