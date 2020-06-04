import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SalaryFilterComponent} from './salary-filter/salary-filter.component';
import {ExperienceFilterComponent} from './experience-filter/experience-filter.component';
import {TypeFilterComponent} from './type-filter/type-filter.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    SalaryFilterComponent,
    ExperienceFilterComponent,
    TypeFilterComponent
  ],
  exports: [
    SalaryFilterComponent,
    ExperienceFilterComponent,
    TypeFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FiltersModule { }
