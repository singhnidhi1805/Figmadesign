import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-slide16941',
  templateUrl: 'slide16941.component.html',
  styleUrls: ['slide16941.component.css'],
})
export class Slide16941 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
