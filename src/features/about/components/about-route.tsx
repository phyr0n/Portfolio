import { MiniHeading } from '@/components/ui/miniheading';
import { PageContainer } from '@/components/layout/page-container';

export const AboutRoute = () => {
  return (
    <PageContainer className="py-16 sm:py-24">
      <MiniHeading>About</MiniHeading>
      <h1 className="mt-3 font-display text-4xl font-semibold text-text sm:text-5xl">
        About Me
      </h1>

      <div className="mt-10 max-w-3xl space-y-5 text-text-muted">
        <p className="leading-relaxed">
          Hi, I'm Adam Tait! I currently live in the North East of England near
          Newcastle upon Tyne. I am a software engineer currently working within
          the video games industry. Besides staring at a screen all day I enjoy
          gardening, cooking, playing video games, and working on emulators.
        </p>
        <p className='leading-relaxed'>
          I graduated with a 2:1 in BSc Computer Science for Games Development
          from the University of Hull in 2020, before going on to complete a
          MSc in Computer Games Engineering at Newcastle University with a 1:1.
        </p>
        <p className="leading-relaxed">
          During my Masters degree, I picked up a full-time job working remotely
          for Ninja Theory in July 2021 as a Junior SmartTools Ninja. I helped
          ship Senua's Saga: Hellblade II on PC and XBOX, where it picked up
          two Game Awards and a BAFTA for Technical Achievement. Nowadays, I work
          at Tanglewood Games as an Intermediate Engineer supporting other Unreal
          Engine 5 projects to achieve their best.
        </p>
        <p className="leading-relaxed">
          Some of my favourite video games of all time are Outer Wilds, Bloodborne,
          Persona 4 Golden, Sonic 3 and Knuckles, Pokemon Platinum, and BioShock.
        </p>
      </div>
    </PageContainer>
  );
};
