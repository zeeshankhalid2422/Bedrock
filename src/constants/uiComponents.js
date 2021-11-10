// optional `menuName` overrides default name for menu item if it's defined
// hideInMenu hides item in menu

export const EXPERIMENT = [
  {
    name: 'Add Experiment',
    menuName: 'Add Experiment',
    desc: 'Add Experiment',
    path: '/app/experiment/add-new'
  },
  {
    name: 'View Experiment',
    menuName: 'View Experiment',
    desc: 'View Experiment',
    path: '/app/experiment/view'
  },
  {
    name: 'Funding Details',
    menuName: 'Funding Details',
    desc: 'Funding Details',
    path: '/app/experiment/funding'
  },
  
]

export const AUTH = [
  {
    name: 'Authentication',
    menuName: 'Authentication',
    desc: 'Authentication',
    path: '/app/auth'
  }
  
]



// for UI Overview page
const COMPONENTS = [
  ...EXPERIMENT,
  ...AUTH,
];

export default COMPONENTS;

