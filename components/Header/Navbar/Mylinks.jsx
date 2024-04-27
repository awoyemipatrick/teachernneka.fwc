import { BlogIcon, BookIcon } from "@/components/icons"


export const links = [
  {
    name: "Explore",
    submenu: true,
    sublink: [
      { name: 'Books', description: '', href: '/books', icon: <BookIcon/> },
      { name: 'Blog', description: '', href: '/blog', icon: <BlogIcon/> },
      { name: 'Gallery', description: '', href: '/gallery', icon: '' },
    ],
  },

  {
    name: "Family Word Centre",
    submenu: true,
    sublink: [
      { name: 'Word Centre', description: '', href: '/fwc', icon: '' },
      { name: 'Children Bible Class', description: '', href: '/cbs', icon: '' },
      { name: 'Community Events', description: '', href: '/event', icon: '' },
      { name: 'Christian Resort', description: '', href: '/resort', icon: '' },
    ],
  },
  {
    name: "Training",
    submenu: true,
    sublink: [
      { name: 'Bible Base Parenting', description: '', href: '/bbparenting', icon: '' },

      { name: 'Parenting Courses', description: '', href: '/parentingCourse', icon: '' },

      { name: 'The Dream Training', description: '', href: '/dream-training', icon: '' },

      { name: 'The Challenges Of The Workplace', description: '', href: '/wpChallenge', icon: '' },
    ],
  },
];
