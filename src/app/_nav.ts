interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Home',
    url: '/dashboard',
    icon: 'icon-home',
  },
  {
    title: true,
    name: 'Stepwise Process'
  },
  {
    name: 'phylogenetic Inference',
    url: '/phylogenetic-inference',
    icon: 'icon-settings'
  },
  {
    title: true,
    name: 'Other Features'
  },
  {
    name: 'File Format Converter',
    url: '/format-conversion',
    icon: 'icon-pencil'
  },
  {
    name: 'Tree Visualization',
    url: '/view-tree',
    icon: 'icon-graph'
  },
  {
    title: true,
    name: 'Additional Information'
  },
  {
    name: 'MSA',
    icon: 'icon-calculator'
  },
  {
    name: 'Inference Algorithms',
    url: '/algorithms',
    icon: 'icon-puzzle'
  },
  {
    name: 'User Guide',
    url: '/user-manual',
    icon: 'icon-user'
  }
];
