import { Routes } from "@angular/router";
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';


const routes:Routes = [
  { path: '',  component: EntryListComponent  },
  { path: 'entry/:id', component: SingleEntryComponent }
];


export {routes};
