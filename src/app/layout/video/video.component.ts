import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})



export class VideoComponent {

  videoURL:string

  constructor() {
    this.videoURL = 'assets/video/angolaonintro.mp4';

  }

}
