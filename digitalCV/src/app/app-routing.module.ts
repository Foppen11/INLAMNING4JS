import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { CvComponent } from './views/cv/cv.component';
import { InformationComponent } from './views/information/information.component';

const routes: Routes = [
  {path: '', component: InformationComponent},
  {path: 'cv', component: CvComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
