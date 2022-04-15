import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NoteBlockComponent } from './landing-page/pages/projects/note-block/note-block.component';
import { TutorialComponent } from './landing-page/pages/tutorial/tutorial.component';
import { Routers } from './shared/model/routers';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: Routers.Tutorial, component: TutorialComponent},
  {path: Routers.NoteBlock, component: NoteBlockComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
