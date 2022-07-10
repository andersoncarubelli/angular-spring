import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoryPipe } from './pipes/category.pipe';
import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({
  declarations: [CategoryPipe],
  imports: [CommonModule, AppMaterialModule],

  exports: [CategoryPipe],
})
export class SharedModule {}
