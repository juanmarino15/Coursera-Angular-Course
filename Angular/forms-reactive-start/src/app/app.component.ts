import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris','Anna'];

  ngOnInit(){
      this.signupForm = new FormGroup({
        'userData' : new FormGroup({
          'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
          'email' : new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail), //for multiple validators add as an array
        }),
        
        'gender': new FormControl('male', Validators.required),
        'hobbies': new FormArray([])
      });
      // this.signupForm.valueChanges.subscribe(
      //   (value) => console.log(value);
      // )
      this.signupForm.statusChanges.subscribe(
        (value) => console.log(value)
      );
      this.signupForm.setValue({
        'userData':{
          'username': 'Max',
          'email': 'max@test.com'
        },
        'gender':'male',
        'hobbies':[]
      });
  }
  onSubmit(){
    console.log(this.signupForm);
    (<FormArray>this.signupForm.controls['userData']).controls['username'].reset();
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control) //need ot cast this line to tel ts is a fomr array (within the parenthesis) then you can push a control
  }

  getControls(){
    return (<FormArray> this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden' : true};
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable <any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
       
    })
    return promise;
  }
}
