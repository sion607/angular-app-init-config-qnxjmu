import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConfigurationService } from './services/configuration.service';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post.component';
import { CommentComponent } from './comment.component';

export function initConfig(configService: ConfigurationService) {
  return () => configService.load();
}

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PostsComponent,
    PostComponent,
    CommentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [ConfigurationService],
      multi: true,
      useFactory: initConfig,
    },
  ],
})
export class AppModule {}
