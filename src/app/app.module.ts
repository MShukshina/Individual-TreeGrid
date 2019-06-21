import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { NodeTreeComponent } from './tree-grid/node-tree/node-tree.component';
import { RowGridComponent } from './tree-grid/node-tree/row-grid/row-grid.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TreeGridComponent,
    NodeTreeComponent,
    RowGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
