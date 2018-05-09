import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { RatingService } from './services/rating.service';
import { CommentComponent } from './comment/comment.component';
import { ShareComponent } from './share/share.component';
import { SaveComponent } from './save/save.component';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { HeaderComponent } from './header/header.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AboutComponent } from './about/about.component';
import { ActivityPlanComponent } from './activity-plan/activity-plan.component';
import { ExamplesComponent } from './examples/examples.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { SupportLevelsComponent } from './support-levels/support-levels.component';
import { CommentsComponent } from './comments/comments.component';
import { NotesComponent } from './notes/notes.component';
import { CommentModalComponent } from './comment-modal/comment-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    CommentComponent,
    ShareComponent,
    SaveComponent,
    ButtonContainerComponent,
    HeaderComponent,
    AppNavbarComponent,
    AboutComponent,
    ActivityPlanComponent,
    ExamplesComponent,
    AppBodyComponent,
    SupportLevelsComponent,
    CommentsComponent,
    NotesComponent,
    CommentModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BootstrapModalModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'activity-plan',
        component: ActivityPlanComponent
      },
      {
        path: 'examples',
        component: ExamplesComponent
      },
    ])
  ],
  providers: [
    RatingService,
    NgbActiveModal],

    entryComponents: [
      CommentModalComponent
    ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
