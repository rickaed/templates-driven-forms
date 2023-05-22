import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent {
  constructor(private fb: FormBuilder) { }
types = ["film", "série", "épisode"];
  movieForm = this.fb.group({
    select=new FormGroup({
      id: new FormControl(''),
      title: new FormControl('')
    })
    
  })

  isRequiredValidator()(controlName1, controlName2): ValidatorFn {
    return (control: AbortController): ValidationErrors | null => {
      const id = control.get(controlName1).value;
      const title = control.get(controlName2).value;

      if(!(id || title)){
        return{'isRequired':{}}
      }
    }

  }

}
