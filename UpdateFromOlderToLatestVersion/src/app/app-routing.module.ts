import { NgModule } from '@angular/core';

// biome-ignore lint/style/useImportType: <explanation>
import { Routes, RouterModule } from '@angular/router';
import { PageRedirectComponent } from './components/page-redirect/page-redirect.component';

const routes: Routes = [
  { path: ':id', component: PageRedirectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
