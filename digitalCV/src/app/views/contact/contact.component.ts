import { Component, OnInit } from '@angular/core';
import { MessageModel } from 'src/app/module/message/message-model'; 

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  public user = new MessageModel


  ngOnInit(): void {
    
  }

  onSubmit(regForm: any) {
    console.log(regForm.form.value)
    regForm.reset()
    alert('Thanks for your message')
  }


}
