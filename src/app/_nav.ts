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
    name: 'Data Pre-processing'
  },
  {
    name: 'Data Cleaning',
    url: '/preprocess-file',
    icon: 'icon-drop'
  },
  {
    name: 'MSA',
    url: '/preprocess-file',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Phylogenetic Inference'
  },
  {
    name: 'Recommendation',
    url: '/upload-file',
    icon: 'icon-puzzle',
  },
  {
    name: 'Tree Generation',
    url: '/generate',
    icon: 'icon-settings',
  },
  {
    title: true,
    name: 'Tree Visualization'
  },
  {
    name: 'Tree Layout selection',
    url: '/layout',
    icon: 'icon-graph',
  },
  {
    name: 'Download Tree File',
    url: '/download',
    icon: 'icon-cloud-download',
  },
];
