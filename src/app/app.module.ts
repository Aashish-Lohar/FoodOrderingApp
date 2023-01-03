import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './partials/search/search.component';   
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from './partials/tags/tags.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { TesComponent } from './tes/tes.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { MapComponent } from './partials/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PaypalComponent } from './partials/paypal/paypal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    TesComponent,
    CartComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CheckoutPageComponent,
    MapComponent,
    PaymentsPageComponent,
    PaypalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RatingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    LeafletModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
