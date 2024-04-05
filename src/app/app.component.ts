import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Reactive-Forms';
  form !:FormGroup;
  booklist: any[] = [];

  constructor(private fb:FormBuilder)
  {}
    ngOnInit()
    {
    this.form=this.fb.group({
      Book_Name:['', Validators.required],
      Author:['', Validators.required],
      Price:['', Validators.required],
      Genre:['', Validators.required],
      Published_Date:['', Validators.required],
      Country:['', Validators.required],
      Description:['', Validators.required],
    })
    }
    submit()
    {
      this.booklist.push(this.form.value);     
      console.log(this.booklist);
     
    }
  
}

