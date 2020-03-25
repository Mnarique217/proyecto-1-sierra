
/** Componentes */
import {
  MainComponent,
  NotFoundComponent,
} from '../Pages';

export const routes = [
  {
    path: "/main",
    component: MainComponent
  },
  {
    path: "/about",
    component: null,
  },
  {
    path: "/Login",
    component: null,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];