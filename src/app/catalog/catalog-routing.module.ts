import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { CatalogComponent } from './catalog.component';
import { extract } from '@app/core';
import { CatalogListComponent } from './catalog-list.component';

const routes: Routes = [
  Shell.childRoutes([
    // { path: '', redirectTo: '/catalog', pathMatch: 'full' },
    // {
    //   path: 'catalog',
    //   component: CatalogComponent,
    //   data: { title: extract('Catalog') }
    // },
    // {
    //   path: 'catalog/:catalogName',
    //   component: CatalogComponent,
    //   data: { title: extract('Catalog') }
    // },
    {
      path: '',
      redirectTo: '/promotion',
      pathMatch: 'full'
    },
    {
      path: ':catalogName',
      component: CatalogListComponent,
      data: { title: extract('Catalog List') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}
