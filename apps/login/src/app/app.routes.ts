import { RouterModule } from '@angular/router';

RouterModule.forRoot(
  [
    {
      path: '',
      loadChildren: () =>
        import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
    },
  ],
  { initialNavigation: 'enabledBlocking' }
);
