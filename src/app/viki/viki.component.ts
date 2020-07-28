import { Component, OnInit } from '@angular/core';
import{RecordsService}from '../records.service';

@Component({
  selector: 'app-viki',
  templateUrl: './viki.component.html',
  styleUrls: ['./viki.component.css']
})
export class VikiComponent implements OnInit {
mytext='livechanging text';
records={}
  constructor(private strecords:RecordsService){
    this.records=this.strecords.getdata();
    
  }
  
  
  
  ngOnInit(): void {
    
  }

}
