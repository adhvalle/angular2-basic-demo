// compile the app in the browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import the module we created
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
