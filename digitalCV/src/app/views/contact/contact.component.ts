import { Component, OnInit } from '@angular/core';
import { MessageModel } from 'src/app/module/message/message-model'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  public user = new MessageModel

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }


  onSubmit(regForm: any) {
    console.log(this.user)
    this.user.name = ''
    this.user.email = ''
    this.user.title = ''
    this.user.message = ''
    alert('Thanks for your message')
  }
}
