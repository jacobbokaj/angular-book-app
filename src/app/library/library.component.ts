import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-library',
  imports: [RouterModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  

  bookSearch = new FormGroup({
    id: new FormControl(0)
  });



}
