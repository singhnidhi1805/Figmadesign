import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Slide16938 } from './slide16938.component'

const routes = [
  {
    path: '',
    component: Slide16938,
  },
]

@NgModule({
  declarations: [Slide16938],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Slide16938],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Slide16938Module {}
