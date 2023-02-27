import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Slide16940 } from './slide16940.component'

const routes = [
  {
    path: '',
    component: Slide16940,
  },
]

@NgModule({
  declarations: [Slide16940],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Slide16940],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Slide16940Module {}
