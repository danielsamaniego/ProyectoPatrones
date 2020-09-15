import { Routes } from '@angular/router';

import { EnviosComponent } from '../../envios/envios.component';
import { CotizadorComponent } from '../../cotizador/cotizador.component';
import { PaisesOrigenComponent } from '../../paises-origen/paises-origen.component';
import { PaisesDestinoComponent } from '../../paises-destino/paises-destino.component';
import { ContenidoEnviosComponent } from '../../contenido-envios/contenido-envios.component';
import { GananciasComponent } from '../../ganancias/ganancias.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: EnviosComponent },
    { path: 'cotizador',   component: CotizadorComponent },
    { path: 'paises_origen',   component: PaisesOrigenComponent },
    { path: 'paises_destino',   component: PaisesDestinoComponent },
    { path: 'contenido_envios',   component: ContenidoEnviosComponent },
    { path: 'ganancias_envio',   component: GananciasComponent },
];
