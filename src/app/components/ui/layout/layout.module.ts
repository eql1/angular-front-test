import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutComponent } from './layout.component'
import { HeaderComponent } from './header/header.component'
import { HeaderModule } from './header/header.module'

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [CommonModule, HeaderModule]
})
export class LayoutModule {}
