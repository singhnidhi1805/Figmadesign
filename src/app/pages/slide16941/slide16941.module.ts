import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Slide16941 } from './slide16941.component'

const routes = [
  {
    path: '',
    component: Slide16941,
  },
]

@NgModule({
  declarations: [Slide16941],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Slide16941],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Slide16941Module {}
