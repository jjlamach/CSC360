import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import  { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupComponent } from './meetup/meetup.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterTwitterFeedComponent } from './footer-twitter-feed/footer-twitter-feed.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TextbookBuyComponent } from './textbook-buy/textbook-buy.component';
import { TextbookSellComponent } from './textbook-sell/textbook-sell.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetupComponent,
    NavigationComponent,
    FooterTwitterFeedComponent,
    MeetupComponent,
    LandingPageComponent,
    TextbookBuyComponent,
    TextbookSellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
