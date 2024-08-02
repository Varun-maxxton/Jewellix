import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { MuhuratComponent } from './muhurat/muhurat.component';
import { CategoryComponent } from './category/category.component';
import { MapsComponent } from './maps/maps.component';
import { ContactComponent } from './contact/contact.component';
import { ApiFetchComponent } from './api-fetch/api-fetch.component';
import { RateService } from './rate.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { GoldComponent } from './gold/gold.component';
import { DiamondComponent } from './diamond/diamond.component';
import { SilverComponent } from './silver/silver.component';
import { LightboxModule } from 'ngx-lightbox';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    JewelleryComponent,
    GiftCardComponent,
    StoreComponent,
    AboutComponent,
    AccountComponent,
    SearchComponent,
    CarouselComponent,
    FooterComponent,
    MuhuratComponent,
    CategoryComponent,
    MapsComponent,
    ContactComponent,
    ApiFetchComponent,
    LoginComponent,
    RegistrationComponent,
    GoldComponent,
    DiamondComponent,
    SilverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LightboxModule

    
  ],
  providers: [RateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
