import { MiniHeading } from '@/components/ui/miniheading';
import { Panel } from '@/components/ui/panel';
import { PageContainer } from '@/components/layout/page-container';

const channels = [
  { label: 'Email', value: 'me@adamtait.net' },
  { label: 'LinkedIn', value: 'linkedin.com/in/adamtaiit' },
  { label: 'GitHub', value: 'github.com/phyr0n' },
];

export const ContactRoute = () => {
  return (
    <PageContainer className="py-16 sm:py-24">
      <MiniHeading>Contact</MiniHeading>
      <h1 className="mt-3 font-display text-4xl font-semibold text-text sm:text-5xl">
        Contact me
      </h1>
      <p className="mt-4 max-w-2xl text-text-muted">
        A more developed version of this page will be coming soon. In the meantime, feel free to connect with me below.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <Panel label="External Links" className="h-fit">
          <ul className="space-y-4">
            {channels.map((channel) => (
              <li key={channel.label} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                <p className="text-xs tracking-[0.1em] text-text-muted uppercase">
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
};
