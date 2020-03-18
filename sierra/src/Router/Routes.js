
/** Componentes */
import {
  NotFoundComponent
} from '../Components';

export const routes = [
  {
    path: "/main",
    component: null
  },
  {
    path: "/main",
    component: null,
    routes: [
      {
        path: "/main",
        component: null,
      },
      {
        path: "/main",
        component: null,
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];