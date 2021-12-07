// optional `menuName` overrides default name for menu item if it's defined
// hideInMenu hides item in menu

export const EXPERIMENT = [
  {
    name: 'View Experiment',
    menuName: 'View Experiment',
    desc: 'View Experiment',
    path: '/users/experiment/view'
  },
  
]

export const USERS = [
  {
    name: 'Experiment Management',
    menuName: 'Experiment',
    desc: 'Manage Experiment here',
    path: 'users/experiment'
  },
  {
    name: 'Merchants Management',
    menuName: 'Merchant',
    desc: 'Manage Merchant here',
    path: 'users/merchant'
  }
]



// for UI Overview page
const COMPONENTS = [
  ...EXPERIMENT,
  ...USERS
];

export default COMPONENTS;

