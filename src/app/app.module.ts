import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgwWowModule } from 'ngx-wow';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AppnavComponent } from './appnav/appnav.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { ProjectsComponent } from './projects/projects.component';
const routes: Routes =[
  {path: '', component : HomepageComponent},
  {path: 'homepage', component : HomepageComponent},
  {path: 'blog', component : BlogComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'projects', component : ProjectsComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BlogComponent,
    ContactComponent,
    AppnavComponent,
    AppfooterComponent,
    ProjectsComponent,
    
  ],
  exports: [ RouterModule,BrowserAnimationsModule]
  ,

  imports: [
    BrowserModule,
    OwlModule,
    BrowserAnimationsModule,
     AngularFontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {BrowserAnimationsModule}
