import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IteratorPipe } from './iterator.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IteratorPipe],
  exports: [IteratorPipe]
})
export class PipesModule { }
