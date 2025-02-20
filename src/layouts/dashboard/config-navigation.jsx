import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Company Profile',
    path: '/companyprofile',
    icon: icon('ic_company'),
  },
  {
    title: 'Menu Items',
    path: '/menu',
    icon: icon('ic_menu'),
  },
  {
    title: 'Contents',
    path: '/content',
    icon: icon('ic_content'),
  },
  {
    title: 'Components',
    path: '/component',
    icon: icon('ic_component'),
  },
  {
    title: 'Social Links',
    path: '/social',
    icon: icon('ic_share'),
  },
  {
    title: 'About Info',
    path: '/about',
    icon: icon('ic_about'),
  },
  {
    title: 'Jobs',
    path: '/job',
    icon: icon('ic_jobs'),
  },
  {
    title: 'Achievements',
    path: '/achieve',
    icon: icon('ic_achieve'),
  },
  {
    title: 'Gallery Info',
    path: '/gallery',
    icon: icon('ic_gallery'),
  },
  {
    title: 'Sliders',
    path: '/slider',
    icon: icon('ic_slider'),
  },
  {
    title: 'Client Messages',
    path: '/review',
    icon: icon('ic_client'),
  },
  {
    title: 'Clients',
    path: '/client',
    icon: icon('ic_country'),
  },
  {
    title: 'Counters',
    path: '/counter',
    icon: icon('ic_counter'),
  },
  {
    title: 'License Info',
    path: '/license',
    icon: icon('ic_license'),
  },
  {
    title: 'users',
    path: '/user',
    icon: icon('ic_user'),
  },
  // {
  //   title: 'Register Info',
  //   path: '/register',
  //   icon: icon('ic_register'),
  // },
  // {
  //   title: 'Stories',
  //   path: '/stories',
  //   icon: icon('ic_story'),
  // },
  // {
  //   title: 'Courses',
  //   path: '/courses',
  //   icon: icon('ic_course'),
  // },
  // {
  //   title: 'Teachers',
  //   path: '/teachers',
  //   icon: icon('ic_teacher'),
  // },
  // {
  //   title: 'product',
  //   path: '/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
