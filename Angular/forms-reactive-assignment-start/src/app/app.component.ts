import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatuses=['Stable', 'Critical', 'Finished'];
  projectForm : FormGroup;
  forbiddenProjectName=['Test','test'];

  ngOnInit(){
      this.projectForm = new FormGroup({
        'projectName' : new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this), this.asyncForbiddenNames.bind(this)]),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
        'projectStatus' : new FormControl('Stable')
      });
  }

  forbiddenProjectNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectName.indexOf(control.value) !== -1){
      return {'projectNameIsForbidden' : true};
    }
    return null;
  }
  
  asyncForbiddenNames(control: FormControl): Promise<any> | Observable <any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'TestProject') {
          resolve({'projectNameIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
       
    })
    return promise;
  }

  onSubmit(){
    console.log(this.projectForm.value);
    console.log(this.projectForm.get('projectName').value);
    console.log(this.projectForm.get('email').value);
    console.log(this.projectForm.get('projectStatus').value);
  }
}
