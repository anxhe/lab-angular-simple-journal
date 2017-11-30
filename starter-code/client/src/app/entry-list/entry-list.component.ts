import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../service/journal.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries:Array<any> = []

  constructor(public journal:JournalService) { }

  ngOnInit() {
    this.journal.getEntries()
      .subscribe(entries => {
        this.entries = entries
      })
  }

}
