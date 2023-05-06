import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],

  exports:[
   InputTextModule,
   DropdownModule,
   AutoCompleteModule,
   CheckboxModule,
   InputSwitchModule,
   RadioButtonModule,
   InputTextareaModule,
   ButtonModule

  
   
  ]
})
export class PrimeNgModule { }
