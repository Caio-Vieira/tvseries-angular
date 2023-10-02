import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimationsComponent } from './pages/animations/animations.component';
import { FamilyComponent } from './pages/family/family.component';
import { PopularComponent } from './pages/popular/popular.component';
import { SearchmenuComponent } from './components/searchmenu/searchmenu.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'animations', component: AnimationsComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'search', component: SearchmenuComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
