import type { Project } from '@/features/projects/types/project';

export const projects: Project[] = [
  {
    id: 'project-five',
    title: 'NDA\'d Project',
    company: 'Tanglewood Games',
    category: 'professional',
    summary:
      'Collaborating with an external partner on an Unreal Engine 5 project.',
    role: 'Intermediate Engineer',
    year: '????',
    status: 'in-development',
    marquee: { variant: 'rings', label: '[NDA]' },
    skills: ['Unreal Engine 5'],
    sections: [
      {
        heading: 'Overview',
        body: 'I am currently bound by a non-disclosure agreement (NDA) which covers an Unreal Engine 5 project developed by an external partner. \
        The details of this project cannot be discussed.',
      }
    ]
  },
  {
    id: 'senua',
    title: 'Senua',
    company: 'Ninja Theory Ltd.',
    category: 'professional',
    summary:
      'A Celtic warrior is trapped between life and death in a fractured vision of purgatory. In an action‑adventure set in the Hellblade universe, Senua fights to reach the afterlife and reunite with those she loved and lost, battling forces that threaten all she believes in.',
    role: 'SmartTools Ninja',
    year: '2027',
    status: 'in-development',
    marquee: { variant: 'blocks', imageUrl: '/projects/art/senua/senua.jpg', label: '[Codename]' },
    media: [
      { kind: 'image', src: '/projects/art/senua/senua.jpg', alt: 'Slide 1' },
      { kind: 'image', src: '/projects/art/senua/screenshot.jpg', alt: 'Slide 2' },
      { kind: 'image', src: '/projects/art/senua/screenshot-2.jpg', alt: 'Slide 3' },
      { kind: 'video', src: 'https://www.youtube.com/watch?v=t0pp6yWmDEU', source: "youtube" },
    ],
    copyrightNotice: 'Copyright © 2027 Ninja Theory Ltd.',
    skills: ['C++', 'C#', 'Python', 'PowerShell', 'Batch', 'Unreal Engine 5', 'XBOX', 'PlayStation 5', 'PowerAutomate'],
    sections: [
      {
        heading: '',
        body: '*"Senua is a single player action-adventure game and a bold new chapter in Senua’s story. It builds on the emotional depth and cinematic presentation of the Hellblade series, while expanding the gameplay with varied and exciting tactical combat — including encounters against multiple enemies with multiple weapons — alongside exploration, puzzle-solving and greater player agency. Designed for both longtime Hellblade fans and players new to Senua’s world, the game is set within a fantastical, evolving reality shaped by her perception, and delivers an action and gameplay focused journey that expands on the heart of the franchise."*',
      },
      {
        heading: 'Overview',
        body: 'To be written.',
      }
    ],
    links: [
      { label: 'Trailer', href: 'https://youtu.be/91LAY9B6lUc'},
      { label: 'Official Website', href: 'https://www.senuagame.com/'},
      { label: 'Wishlist on Steam', href: 'https://store.steampowered.com/app/3676410/Senua/' },
      { label: 'Wishlist on PlayStation 5', href: 'https://store.playstation.com/en-gb/concept/10015139' },
      { label: 'Wishlist on XBOX', href: 'https://www.xbox.com/en-GB/games/store/senua/9NVMLDZ3TFTK' },
    ],
  },
  {
    id: 'insight',
    title: 'The Insight Project',
    company: 'Ninja Theory Ltd.',
    summary:
      'The Insight Project, an ambitious combination of technology, game design and clinical neuroscience brought together with the aim of generating strategies to alleviate mental distress. Developed by Ninja Theory in collaboration with Professor Paul Fletcher of University of Cambridge.',
    role: 'SmartTools Ninja',
    year: '2024',
    status: 'released',
    marquee: { variant: 'rings', imageUrl: '/projects/art/insight/insight.jpg', label: '[Codename]' },
    category: 'professional',
    copyrightNotice: 'Copyright © 2024 Ninja Theory Ltd.',
    skills: ['C#', 'Unreal Engine 4'],
    sections: [
      {
        heading: '',
        body: '*"The Insight Project, an ambitious combination of technology, game design and clinical neuroscience brought together with the aim of generating strategies to alleviate mental distress. Developed by Ninja Theory in collaboration with Professor Paul Fletcher of University of Cambridge."*',
      },
      {
        heading: 'Overview',
        body: 'To be written.',
      }
    ],
  },
  {
    id: 'mara',
    title: 'Project Mara',
    company: 'Ninja Theory Ltd.',
    summary:
    'Project: MARA will be a real-world and grounded representation of mental terror, based on real lived experience accounts and in-depth research with the aim of recreating the horrors of the mind as accurately and realistically as possible.',
    role: 'SmartTools Ninja',
    year: '2024',
    status: 'cancelled',
    marquee: { variant: 'diagonal', imageUrl: '/projects/art/mara/mara-stairs.jpg', label: '[Codename]' },
    category: 'professional',
    copyrightNotice: 'Copyright © 2024 Ninja Theory Ltd.',
    skills: ['[Language]', '[Tool]'],
    sections: [
      {
        heading: 'Overview',
        body: 'To be written.',
      }
    ],
  },
  {
    id: 'hellblade2',
    title: 'Senua\'s Saga: Hellblade II',
    company: 'Ninja Theory Ltd.',
    summary:
      'The sequel to the award winning Hellblade: Senua’s Sacrifice, Senua returns in a brutal journey of survival through the myth and torment of Viking Iceland. Intent on saving those who have fallen victim to the horrors of tyranny, Senua faces a battle of overcoming the darkness within and without.',
    role: 'SmartTools Ninja',
    year: '2024',
    status: 'released',
    marquee: { variant: 'blocks', imageUrl: '/projects/art/hellblade2/hellblade2enhanced.jpg', label: '' },
    category: 'professional',
    copyrightNotice: 'Copyright © 2025 Ninja Theory Ltd.',
    skills: ['C++', 'C#', 'Python', 'PowerShell', 'Batch', 'WPF', 'Unreal Engine 4', 'Unreal Engine 5', 'PVS-Studio'],
    sections: [
      {
        heading: 'Overview',
        body: 'To be written.',
      }
    ],
  }
  // {
  //   id: 'project-four',
  //   title: '[Project Title Four]',
  //   company: '[Studio Name]',
  //   category: 'personal',
  //   summary:
  //     'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.',
  //   role: '[Your role on this project]',
  //   year: '[Year]',
  //   status: 'cancelled',
  //   marquee: { variant: 'diagonal', label: '[Codename]' },
  //   skills: ['[Language]', '[Engine]'],
  //   sections: [
  //     {
  //       heading: 'Overview',
  //       body: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  //     },
  //     {
  //       heading: 'Why it was cancelled',
  //       body: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.',
  //     },
  //     {
  //       heading: 'What shipped anyway',
  //       body: 'Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat, quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
  //     },
]

export const getProjectById = (id: string): Project | undefined => projects.find((project) => project.id === id);
