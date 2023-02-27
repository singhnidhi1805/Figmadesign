import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-slide16939',
  templateUrl: 'slide16939.component.html',
  styleUrls: ['slide16939.component.css'],
})
export class Slide16939 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
