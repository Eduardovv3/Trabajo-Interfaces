import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 

  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/compras',
    title: 'Compras',
    icon: 'bi bi-bag',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/ventas',
    title: 'Vende tu coche',
    icon: 'bi bi-cash-coin',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/alquiler',
    title: 'Alquilar',
    icon: 'bi bi-send-check',
    class: '',
    extralink: false,
    submenu: []
  }
];
