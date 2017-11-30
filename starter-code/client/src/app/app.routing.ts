import { Routes } from "@angular/router";
import { EntryListComponent } from './entry-list/entry-list.component';



const routes:Routes = [
  { path: '',  component: EntryListComponent  },
  // { path: 'movie/:id', component: MyMovieComponent }
];


export {routes};
