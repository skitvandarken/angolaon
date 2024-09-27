import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { VideoComponent } from '../../layout/video/video.component';
import { CardsComponent } from '../../layout/cards/cards.component';
import { FeaturedComponent } from '../../layout/featured/featured.component';
import { Cards2Component } from "../../layout/cards2/cards2.component";
import { PerfilComponent } from '../../layout/perfil/perfil.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    VideoComponent,
    CardsComponent,
    FeaturedComponent,
    FooterComponent,
    Cards2Component,
    PerfilComponent
],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
