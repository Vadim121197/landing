export enum LandingPath {
  INDEX = '/',
  PERFORMANCE = '/performance',
  ABOUT = '/about',
}

export const headerRoutes = [
  {
    href: LandingPath.INDEX,
    title: 'Strategy',
  },
  {
    href: LandingPath.PERFORMANCE,
    title: 'Performance',
  },
  {
    href: LandingPath.ABOUT,
    title: 'About',
  },
];

export const aboutRoutes = [
  {
    href: LandingPath.INDEX,
    title: 'Team',
  },
  {
    href: LandingPath.PERFORMANCE,
    title: 'Contacts',
  },
];

export const resourceRoutes = [
  {
    href: LandingPath.INDEX,
    title: 'Terms',
  },
  {
    href: LandingPath.PERFORMANCE,
    title: 'Security',
  },
  {
    href: LandingPath.PERFORMANCE,
    title: 'Privacy',
  },
  {
    href: LandingPath.PERFORMANCE,
    title: 'Cookie Policy',
  },
];
