import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { RouterModule } from '@angular/router';
import { LoaderInterceptor } from './core/http-interceptors/loader-interceptor';
import { MatCommonModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    MatCommonModule,
    BrowserAnimationsModule,
    HomeModule,
    ToolbarModule,
    AppRoutingModule
  ],
  providers: [LoaderInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
