import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './card/card.module';
import { SelectComponent } from './select/select.component';
import { OptionComponent } from './option/option.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {OverlayModule} from '@angular/cdk/overlay'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    OptionComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    BrowserAnimationsModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
