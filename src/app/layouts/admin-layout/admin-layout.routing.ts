import { Routes } from '@angular/router';

import { EnviosComponent } from '../../envios/envios.component';
import { CotizadorComponent } from '../../cotizador/cotizador.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: EnviosComponent },
    { path: 'cotizador',   component: CotizadorComponent },
];
