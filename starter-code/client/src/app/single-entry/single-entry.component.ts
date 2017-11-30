import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../service/journal.service'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entry:any;

  constructor(public journal:JournalService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.getEntryDetail(params['id'])
      })
  }


  getEntryDetail(id){
    this.journal.getSingleEntry(id)
      .subscribe(e => {
        this.entry = e
      })
  }

}
