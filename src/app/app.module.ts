import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { LeftFirstComponent } from './left-container/left-first/left-first.component';
import { LeftSecondComponent } from './left-container/left-second/left-second.component';
import { RightFirstComponent } from './right-container/right-first/right-first.component';
import { RightSecondComponent } from './right-container/right-second/right-second.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LeftContainerComponent,
    RightContainerComponent,
    LeftFirstComponent,
    LeftSecondComponent,
    RightFirstComponent,
    RightSecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
