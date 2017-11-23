import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { SelectableComponent } from './selectable/selectable.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    SelectableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
