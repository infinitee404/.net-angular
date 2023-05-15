import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = {
    name: "Change",
    surname: "Me"
  };

  // submit() {
  //   alert(`Submited with: ${this.user.name} ${this.user.surname}`);
  // }

  name: string = 'Tomas';

  // it is possible to react to the input value change 
  // (which is not the case when using ngModel)
  handleNameChange(name: string) {
    this.name = name;
  }

  submit() {
    alert(`Submited with: ${this.name}`);
  }
}

export interface User {
  name: string;
  surname: string;
}

