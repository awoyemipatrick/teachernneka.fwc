import { BlogIcon, BookIcon } from "@/components/icons"


export const links = [
  {
    name: "Explore",
    submenu: true,
    sublink: [
      { name: 'Books', description: '', href: '/book', icon: <BookIcon/> },
      { name: 'Blog', description: '', href: '/blog', icon: <BlogIcon/> },
      { name: 'Gallery', description: '', href: '/gallery', icon: '' },
    ],
  },

  {
    name: "Family Word Centre",
    submenu: true,
    sublink: [
      { name: 'Word Centre', description: '', href: '/wordCentre', icon: '' },
      { name: 'Children Bible Class', description: '', href: '/childrenBibleClass', icon: '' },
      { name: 'Community Events', description: '', href: '/events', icon: '' },
      { name: 'Christian Resort', description: '', href: '/resort', icon: '' },
    ],
  },
  {
    name: "Training",
    submenu: true,
    sublink: [
      { name: 'Bible Base Parenting', description: '', href: '/bibleBaseParenting', icon: '' },

      { name: 'Parenting Courses', description: '', href: '/parentingCourse', icon: '' },

      { name: 'The Dream Training', description: '', href: '/dreamTraining', icon: '' },

      { name: 'The Challenges Of The Workplace', description: '', href: '/workPlaceChallenge', icon: '' },
    ],
  },
];
