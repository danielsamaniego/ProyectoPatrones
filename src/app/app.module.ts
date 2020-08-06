import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { PaqueteService } from '../app/services/paquete.service';
import { ConfiguracionFirebase } from './services/ConfiguracionFirebase';

@NgModule({
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(ConfiguracionFirebase.getConfiguracionFirebae().firebaseConfig),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent

  ],
  providers: [
    PaqueteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
