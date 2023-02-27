import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Slide16942 } from './slide16942.component'

const routes = [
  {
    path: '',
    component: Slide16942,
  },
]

@NgModule({
  declarations: [Slide16942],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Slide16942],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Slide16942Module {}
