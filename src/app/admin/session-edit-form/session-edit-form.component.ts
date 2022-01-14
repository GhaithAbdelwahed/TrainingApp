import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Session} from 'src/app/session';
import {FakeSessionItemService} from '../fake-session-item.service';

@Component({
 selector: 'app-session-edit-form',
 templateUrl: './session-edit-form.component.html',
 styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
 id: any;
 session : any;
 private sub: any;
  tracks = ['MEAN', 'Angular',
 'NodeJS', 'Android', 'Swift', 'Xamarin'];
 
constructor(private sessionItemService: FakeSessionItemService, private route: ActivatedRoute) { }

ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
    this.id = params ['id'];
  });
  console.log('Session ID' + this.id.toString());
  this.session = this.sessionItemService.getSession(this.id);
 }
editSession(sessionItem: any) {
  console.log(sessionItem);
}
}
