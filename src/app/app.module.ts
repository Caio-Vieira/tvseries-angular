import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { octSearch } from '@ng-icons/octicons';
import { HomeComponent } from './pages/home/home.component';
import { AnimationsComponent } from './pages/animations/animations.component';
import { PopularComponent } from './pages/popular/popular.component';
import { FamilyComponent } from './pages/family/family.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchmenuComponent } from './components/searchmenu/searchmenu.component';
import { NgIconsModule } from '@ng-icons/core';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './pages/search/search.component';
import {
  bootstrapFacebook,
  bootstrapInstagram,
  bootstrapTv,
  bootstrapYoutube,
  bootstrapArrowLeft,
  bootstrapStarHalf,
  bootstrapStars,
  bootstrapAward,
  bootstrapXLg
} from '@ng-icons/bootstrap-icons';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimationsComponent,
    PopularComponent,
    FamilyComponent,
    MenuComponent,
    SearchmenuComponent,
    FooterComponent,
    SearchComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgIconsModule.withIcons({
      octSearch,
      bootstrapFacebook,
      bootstrapInstagram,
      bootstrapYoutube,
      bootstrapTv,
      bootstrapArrowLeft,
      bootstrapStarHalf,
      bootstrapStars,
      bootstrapAward,
      bootstrapXLg
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
