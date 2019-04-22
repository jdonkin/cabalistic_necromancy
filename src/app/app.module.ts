import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoadingComponent } from './views/loading/loading.component';
import { ErrorInterceptor } from './services/error.interceptor';
import { ErrorComponent } from './views/error/error.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RouterModule, Route } from '@angular/router';

const ROUTES:Route[] = [
  {path: 'home', component: DashboardComponent},
  {path: 'error', component: ErrorComponent },
  {path: '', component:DashboardComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    ErrorComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
