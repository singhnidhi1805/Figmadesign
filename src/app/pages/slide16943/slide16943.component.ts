import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-slide16943',
  templateUrl: 'slide16943.component.html',
  styleUrls: ['slide16943.component.css'],
})
export class Slide16943 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
