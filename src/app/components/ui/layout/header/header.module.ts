import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header.component'
import { MatIconModule } from '@angular/material'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, MatIconModule, RouterModule]
})
export class HeaderModule {}
