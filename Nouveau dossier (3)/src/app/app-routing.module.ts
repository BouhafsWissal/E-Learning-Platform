import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AenvoyermsgComponent } from './components/private/apprenant/aenvoyermsg/aenvoyermsg.component';
import { AmessagerieComponent } from './components/private/apprenant/amessagerie/amessagerie.component';
import { EvaluersessionComponent } from './components/private/apprenant/evaluersession/evaluersession.component';
import { ListeapprenantComponent } from './components/private/apprenant/listeapprenant/listeapprenant.component';
import { MessessionsComponent } from './components/private/apprenant/messessions/messessions.component';
import { PayerComponent } from './components/private/apprenant/payer/payer.component';

import { ProfilapprenantComponent } from './components/private/apprenant/profilapprenant/profilapprenant.component';
import { UpdateapprenantComponent } from './components/private/apprenant/updateapprenant/updateapprenant.component';

import { EvoyermsgComponent } from './components/private/formateur/evoyermsg/evoyermsg.component';
import { ListefileComponent } from './components/private/formateur/listefile/listefile.component';
import { ListeformateurComponent } from './components/private/formateur/listeformateur/listeformateur.component';
import { MessagerieComponent } from './components/private/formateur/messagerie/messagerie.component';
import { SessionsfComponent } from './components/private/formateur/sessionsf/sessionsf.component';
import { UpdateformateurComponent } from './components/private/formateur/updateformateur/updateformateur.component';
import { UploadFilesComponent } from './components/private/formateur/upload-files/upload-files.component';

import { AddGestionnaireComponent } from './components/private/gestionnaire/add-gestionnaire/add-gestionnaire.component';
import { AddsessionComponent } from './components/private/gestionnaire/addsession/addsession.component';
import { ListegestionnaireComponent } from './components/private/gestionnaire/listegestionnaire/listegestionnaire.component';
import { ListeparticipationComponent } from './components/private/gestionnaire/listeparticipation/listeparticipation.component';
import { ListesessionComponent } from './components/private/gestionnaire/listesession/listesession.component';
import { StatistiqueComponent } from './components/private/gestionnaire/statistique/statistique.component';
import { UpdategestionnaireComponent } from './components/private/gestionnaire/updategestionnaire/updategestionnaire.component';
import { UpdateparticipationComponent } from './components/private/gestionnaire/updateparticipation/updateparticipation.component';
import { UpdatesessionComponent } from './components/private/gestionnaire/updatesession/updatesession.component';
import { AddreclamationComponent } from './components/private/shared/addreclamation/addreclamation.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { ListerecllamationComponent } from './components/private/shared/listerecllamation/listerecllamation.component';
import { ProfilComponent } from './components/private/shared/profil/profil.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { UpdateprofilComponent } from './components/private/shared/updateprofil/updateprofil.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { Login2Component } from './login2/login2.component';
import { Page404Component } from './page404/page404.component';
import { TableevaluationComponent } from './tableevaluation/tableevaluation.component';


const routes: Routes = [  
  {
    path: "tableevaluation/:id",
    component :TableevaluationComponent },
  {
    path: "updateprofil",
    component :UpdateprofilComponent },     
  {
    path: "profil",
    component : ProfilComponent }, 
  {
    path: "payer",
    component : PayerComponent },   
  {
    path: "evaluersession/:idsession/:idapp",
    component : EvaluersessionComponent },  
  {
    path: "sessionsf",
    component : SessionsfComponent },   
  {
    path: "messessions",
    component : MessessionsComponent }, 
  {
    path: "updateparticipation/:id",
    component: UpdateparticipationComponent
  },
  
   
  {
    path: "listeparticipation",
    component:ListeparticipationComponent
  },
  {
    path: "uploadfile",
    component:UploadFilesComponent
  },
  {
    path: "aenvoyermsg",
    component: AenvoyermsgComponent
  },
  {
    path: "amessagerie",
    component: AmessagerieComponent
  },
    {
  path: "envoyermsg",
  component: EvoyermsgComponent
},
  {
    path: "messagerie",
    component: MessagerieComponent
  },
  {
    path: "listefile",
    component: ListefileComponent
  },
 
  {
    path: "listesession",
    component: ListesessionComponent
  },
  {
    path: "updatesession/:id",
    component: UpdatesessionComponent
  },
  {
    path: "addreclamation",
    component: AddreclamationComponent
  },
  {
    path: "listereclamation",
    component: ListerecllamationComponent
  },
  {
    path: "addsession",
    component: AddsessionComponent
  },
  {
    path: "listeapprenant",
    component: ListeapprenantComponent
  },
  {
    path: "updateapprenant/:id",
    component: UpdateapprenantComponent
  },
  {
    path: "updateformateur/:id",
    component: UpdateformateurComponent
  },
  {
    path: "listeformateur",
    component: ListeformateurComponent
  },
  {
    path: "topbar",
    component: TopbarComponent
  },
  {
    path: "sidebar",
    component: SidebarComponent
  },
  {
    path: "statistique",
    component: StatistiqueComponent
  },
  {
    path: "listegestionnaire",
    component: ListegestionnaireComponent
  }, {
    path: "addgestionnaire",
    component: AddGestionnaireComponent
  },
  {
    path: "updategestionnaire/:id",
    component: UpdategestionnaireComponent
  },
  {
    path: "login2",
    component: Login2Component
  },


  {
    path: "profileapprenant",
    component: ProfilapprenantComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent

  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "**",
    component: Page404Component
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
