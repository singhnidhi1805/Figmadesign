import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Slide16939 } from './slide16939.component'

const routes = [
  {
    path: '',
    component: Slide16939,
  },
]

@NgModule({
  declarations: [Slide16939],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Slide16939],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Slide16939Module {}
