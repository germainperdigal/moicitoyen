import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'timeline', loadChildren: './timeline/timeline.module#TimelinePageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'quizz', loadChildren: './quizz/quizz.module#QuizzPageModule' },
  { path: 'answer', loadChildren: './answer/answer.module#AnswerPageModule' },
  { path: 'notify', loadChildren: './notify/notify.module#NotifyPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
