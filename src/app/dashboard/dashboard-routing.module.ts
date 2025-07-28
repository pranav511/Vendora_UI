import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../component/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent ,
  children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then(m => m.AdminModule),
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('./customer/customer.module').then(m => m.CustomerModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}  // ✅ This must be exported and decorated with @NgModule
