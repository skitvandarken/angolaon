import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { SponsorPartnerComponent } from './paginas/sponsor-partner/sponsor-partner.component';
import { EquipaComponent } from './paginas/equipa/equipa.component';

export const routes: Routes = [

    {path:'', component: InicioComponent},
    {path:'acerca', component: AcercaComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'spocpart', component: SponsorPartnerComponent},
    {path:'equipa', component: EquipaComponent}

];
