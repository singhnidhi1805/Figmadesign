import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-slide16938',
  templateUrl: 'slide16938.component.html',
  styleUrls: ['slide16938.component.css'],
})
export class Slide16938 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
