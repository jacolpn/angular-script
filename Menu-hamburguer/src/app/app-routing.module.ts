import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuModule } from './menu/menu.module';
import { OneComponent } from './one/one.component';

const routes: Routes = [
  { 
    path: 'p/add', 
    component: OneComponent,
    data: {
      title: 'TitleComponent.'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
