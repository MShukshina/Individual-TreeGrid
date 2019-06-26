import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { NodeTreeComponent } from './tree-grid/node-tree/node-tree.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginatorComponent } from './footer/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeGridComponent,
    NodeTreeComponent,
    HeaderComponent,
    FooterComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
