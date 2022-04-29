import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApiCryptoComponent } from './landing-page/pages/projects/api-crypto/api-crypto.component';
import { NoteBlockComponent } from './landing-page/pages/projects/note-block/note-block.component';
import { TutorialComponent } from './landing-page/pages/tutorial/tutorial.component';
import { Routers } from './shared/enums/routers';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: Routers.Tutorial, component: TutorialComponent},
  {path: Routers.Tutorial + '/:id', component: TutorialComponent},
  {path: Routers.NoteBlock, component: NoteBlockComponent},
  {path: Routers.Crypto, component: ApiCryptoComponent},
  {path: '**', redirectTo: Routers.LandingPage, pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
