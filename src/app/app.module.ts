import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'template', component: TemplateDrivenFormComponent},
  { path: 'userlist', component: UserListComponent }
] 

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
