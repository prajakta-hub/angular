import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TestComponent } from './test/test.component';
import { FilterPipePipe } from './filter-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TestComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
