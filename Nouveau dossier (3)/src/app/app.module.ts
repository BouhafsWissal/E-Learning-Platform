import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule  , ReactiveFormsModule} from '@angular/forms';
import { Home2Component } from './home2/home2.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { HomeComponent } from './components/public/home/home.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { ProfilapprenantComponent } from './components/private/apprenant/profilapprenant/profilapprenant.component';

import { Page404Component } from './page404/page404.component';
import { Login2Component } from './login2/login2.component';
import {HttpClientModule } from '@angular/common/http';

import { ListegestionnaireComponent } from './components/private/gestionnaire/listegestionnaire/listegestionnaire.component';
import { UpdategestionnaireComponent } from './components/private/gestionnaire/updategestionnaire/updategestionnaire.component';
import { AddGestionnaireComponent } from './components/private/gestionnaire/add-gestionnaire/add-gestionnaire.component';
import { ListeapprenantComponent } from './components/private/apprenant/listeapprenant/listeapprenant.component';
import { UpdateapprenantComponent } from './components/private/apprenant/updateapprenant/updateapprenant.component';
import { StatistiqueComponent } from './components/private/gestionnaire/statistique/statistique.component' ; 
import { ChartsModule } from 'ng2-charts';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { ListeformateurComponent } from './components/private/formateur/listeformateur/listeformateur.component';
import { UpdateformateurComponent } from './components/private/formateur/updateformateur/updateformateur.component';

import { AddreclamationComponent } from './components/private/shared/addreclamation/addreclamation.component';
import { AddsessionComponent } from './components/private/gestionnaire/addsession/addsession.component';
import { ListerecllamationComponent } from './components/private/shared/listerecllamation/listerecllamation.component';
import { ListesessionComponent } from './components/private/gestionnaire/listesession/listesession.component';
import { UpdatesessionComponent } from './components/private/gestionnaire/updatesession/updatesession.component';

import { ListefileComponent } from './components/private/formateur/listefile/listefile.component';
import { EvoyermsgComponent } from './components/private/formateur/evoyermsg/evoyermsg.component';
import { MessagerieComponent } from './components/private/formateur/messagerie/messagerie.component';

import { AmessagerieComponent } from './components/private/apprenant/amessagerie/amessagerie.component';
import { AenvoyermsgComponent } from './components/private/apprenant/aenvoyermsg/aenvoyermsg.component';
import { UploadFilesComponent } from './components/private/formateur/upload-files/upload-files.component';
import { ListeparticipationComponent } from './components/private/gestionnaire/listeparticipation/listeparticipation.component';
import { UpdateparticipationComponent } from './components/private/gestionnaire/updateparticipation/updateparticipation.component';
import { MessessionsComponent } from './components/private/apprenant/messessions/messessions.component';
import { SessionsfComponent } from './components/private/formateur/sessionsf/sessionsf.component';
import { EvaluersessionComponent } from './components/private/apprenant/evaluersession/evaluersession.component';
import { PayerComponent } from './components/private/apprenant/payer/payer.component';
import { ProfilComponent } from './components/private/shared/profil/profil.component';
import { UpdateprofilComponent } from './components/private/shared/updateprofil/updateprofil.component';
import { TableevaluationComponent } from './tableevaluation/tableevaluation.component';
import {JwtHelperService, JwtInterceptor, JwtModule} from '@auth0/angular-jwt';

// import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';









@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule , 
    HttpClientModule ,
    ReactiveFormsModule , 
    ChartsModule , 
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('currentUser');
        }
      }
    }),
   
  ],
  declarations: [
    AppComponent,
    Home2Component,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfilapprenantComponent,

    Page404Component,
    Login2Component,
 
    ListegestionnaireComponent,
    UpdategestionnaireComponent,
    AddGestionnaireComponent,
    ListeapprenantComponent,
    UpdateapprenantComponent,
    StatistiqueComponent,
    SidebarComponent,
    TopbarComponent,
    ListeformateurComponent,
    UpdateformateurComponent,
   
    AddreclamationComponent,
   
    AddsessionComponent,
   
    ListerecllamationComponent,
   
    ListesessionComponent,
   
    UpdatesessionComponent,
   
   
   
    ListefileComponent,
   
    EvoyermsgComponent,
   
    MessagerieComponent,
   
   
   
    AmessagerieComponent,
   
   
   
    AenvoyermsgComponent,
   
   
   
    UploadFilesComponent,
   
   
   
    ListeparticipationComponent,
   
   
   
    UpdateparticipationComponent,
   
   
   
    MessessionsComponent,
   
   
   
    SessionsfComponent,
   
   
   
    EvaluersessionComponent,
   
   
   
    PayerComponent,
   
   
   
    ProfilComponent,
   
   
   
    UpdateprofilComponent,
   
   
   
    TableevaluationComponent,
   
   
   
 
   
   
   

   
   
   
 
   
   
   
  
   
   
   
   
   
   
   
    
   
 
  
   
    
    ],
    exports: [ 

  ],
  providers: [   


    ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
