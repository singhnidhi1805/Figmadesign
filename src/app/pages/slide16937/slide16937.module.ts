import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Slide16937 } from './slide16937.component'

const routes = [
  {
    path: '',
    component: Slide16937,
  },
]

@NgModule({
  declarations: [Slide16937],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Slide16937],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Slide16937Module {}
