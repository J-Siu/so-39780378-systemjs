import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MomentService } from './moment.service';

@NgModule({

  imports: [
    BrowserModule
  ],

  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [MomentService]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
