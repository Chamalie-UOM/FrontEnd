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
    name: 'Stepwise Phylogenetic Inference',
    url: '/phylogenetic-inference',
    icon: 'icon-pencil'
  },
  {
    name: 'File Format Converter',
    url: '/format-conversion',
    icon: 'icon-pencil'
  },
  {
    name: 'MSA',
    icon: 'icon-pencil'
  },
  {
    name: 'Inference Algorithms',
    url: '/algorithms',
    icon: 'icon-puzzle'
  },
  {
    name: 'Tree Visualization',
    url: '/view-tree',
    icon: 'icon-graph'
  },
  {
    name: 'User Guide',
    url: '/user-manual',
    icon: 'icon-user'
  }
];
