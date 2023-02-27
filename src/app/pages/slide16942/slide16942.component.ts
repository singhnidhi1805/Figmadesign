import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-slide16942',
  templateUrl: 'slide16942.component.html',
  styleUrls: ['slide16942.component.css'],
})
export class Slide16942 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
