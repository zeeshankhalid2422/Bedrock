// optional `menuName` overrides default name for menu item if it's defined
// hideInMenu hides item in menu

export const EXPERIMENT = [
  {
    name: 'View Experiment',
    menuName: 'View Experiment',
    desc: 'View Experiment',
    path: '/admin/experiment/view'
  },
  
]

export const ADMIN = [
  {
    name: 'Experiment Management',
    menuName: 'Experiment',
    desc: 'Manage Experiment here',
    path: 'admin/experiment'
  },
  {
    name: 'Merchants Management',
    menuName: 'Merchant',
    desc: 'Manage Merchant here',
    path: 'admin/merchant'
  }
]



// for UI Overview page
const COMPONENTS = [
  ...EXPERIMENT,
  ...ADMIN
];

export default COMPONENTS;

