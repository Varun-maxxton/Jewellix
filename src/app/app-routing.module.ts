import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { SearchComponent } from './search/search.component';
import { StoreComponent } from './store/store.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MuhuratComponent } from './muhurat/muhurat.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { GoldComponent } from './gold/gold.component';
import { DiamondComponent } from './diamond/diamond.component';
import { SilverComponent } from './silver/silver.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'jewellery',component:JewelleryComponent},
  { path: 'about-us', component: AboutComponent },
  { path: 'account', component: AccountComponent },
  { path: 'gift-card', component: GiftCardComponent },
  { path: 'search', component: SearchComponent },
  { path: 'store', component: StoreComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'muhurat', component: MuhuratComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'gold', component: GoldComponent },
  { path: 'diamond', component: DiamondComponent },
  { path: 'silver', component: SilverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
