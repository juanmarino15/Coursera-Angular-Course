import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { AuthGuard } from "./auth-guard.service";
import { CandDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes =[
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent } //loading a single user
    ]},
    { path: 'servers',
        // canActivate: [AuthGuard],
        canActivateChild:[AuthGuard],
        component: ServersComponent,
         children: [
                    { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
                    { path: ':id/edit', component: EditServerComponent, canDeactivate:[CandDeactivateGuard]}
         ] 
    },
    // { path: 'not-found', component: PageNotFoundComponent }, //component is the module you want to load, path is how you get there through URL
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} }, //component is the module you want to load, path is how you get there through URL
    { path: '**', redirectTo: '/not-found' } // ** is a wild card that catches any url that doesnt exist. IT ALWAYS HAS TO BE THE LAST ROUE IN THE LIST
  
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}