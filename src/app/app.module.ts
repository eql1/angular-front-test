import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutComponent } from './components/ui/layout/layout.component'
import { HeaderComponent } from './components/ui/layout/header/header.component'
import { LayoutModule } from './components/ui/layout/layout.module'
import { HeaderModule } from './components/ui/layout/header/header.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
