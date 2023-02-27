import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-slide16940',
  templateUrl: 'slide16940.component.html',
  styleUrls: ['slide16940.component.css'],
})
export class Slide16940 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
