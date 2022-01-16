import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreEntryComponent } from './core/core-entry/core-entry.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CoreEntryComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: () =>
      //     import('./pages/pages.module').then((m) => m.PagesModule),
      //   data: {animation: 'HomePage'}
      // },
      {
        path: '',
        loadChildren: () =>
          import('./modules/todo/todo.module').then((m) => m.TodoModule)
      },
    ]
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
