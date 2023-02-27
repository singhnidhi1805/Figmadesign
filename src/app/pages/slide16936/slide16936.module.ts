import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Slide16936 } from './slide16936.component'

const routes = [
  {
    path: '',
    component: Slide16936,
  },
]

@NgModule({
  declarations: [Slide16936],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Slide16936],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Slide16936Module {}
