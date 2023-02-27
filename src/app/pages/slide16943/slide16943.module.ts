import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Slide16943 } from './slide16943.component'

const routes = [
  {
    path: '',
    component: Slide16943,
  },
]

@NgModule({
  declarations: [Slide16943],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Slide16943],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Slide16943Module {}
