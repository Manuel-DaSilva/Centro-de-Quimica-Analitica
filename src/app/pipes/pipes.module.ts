import { NgModule } from "@angular/core";
import { ImagePathPipe } from 'src/app/pipes/image-path.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ImagePathPipe
  ],
  exports: [
    ImagePathPipe
  ],
  imports: [CommonModule]
})
export class PipesModule {}
