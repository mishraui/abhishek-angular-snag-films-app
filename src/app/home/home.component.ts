import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from '../service/http.service'
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @Input() filmsList;
    constructor(private httpService: HttpService){

    }

    ngOnInit() {
      console.log(this);
    }
}
