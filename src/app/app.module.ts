import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'slide16936',
    loadChildren: () =>
      import('./pages/slide16936/slide16936.module').then(
        (m) => m.Slide16936Module
      ),
  },
  {
    path: 'slide16937',
    loadChildren: () =>
      import('./pages/slide16937/slide16937.module').then(
        (m) => m.Slide16937Module
      ),
  },
  {
    path: 'slide16938',
    loadChildren: () =>
      import('./pages/slide16938/slide16938.module').then(
        (m) => m.Slide16938Module
      ),
  },
  {
    path: 'slide16939',
    loadChildren: () =>
      import('./pages/slide16939/slide16939.module').then(
        (m) => m.Slide16939Module
      ),
  },
  {
    path: 'slide16940',
    loadChildren: () =>
      import('./pages/slide16940/slide16940.module').then(
        (m) => m.Slide16940Module
      ),
  },
  {
    path: 'slide16941',
    loadChildren: () =>
      import('./pages/slide16941/slide16941.module').then(
        (m) => m.Slide16941Module
      ),
  },
  {
    path: 'slide16942',
    loadChildren: () =>
      import('./pages/slide16942/slide16942.module').then(
        (m) => m.Slide16942Module
      ),
  },
  {
    path: 'slide16943',
    loadChildren: () =>
      import('./pages/slide16943/slide16943.module').then(
        (m) => m.Slide16943Module
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
