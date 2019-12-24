import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NumberComponent} from './rete/controls/number-control';
import {ReteComponent} from './rete/rete.component';
import {ReteModule} from '../../../angular-render-plugin/src/public-api';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ReteComponent,
    NumberComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NumberComponent]
})
export class AppModule { }
