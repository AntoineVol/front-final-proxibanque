import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import {NG_VALIDATORS, ValidationErrors, FormControl} from "@angular/forms";

@Directive({
  selector: '[appRequiredIf]',
  providers: [
    {provide: NG_VALIDATORS,useExisting:RequiredIfDirective, multi: true}
]
})
export class RequiredIfDirective implements Validator {

  @Input("appRequiredIf") appRequiredIf: string;

  constructor() { }

  validate(control:AbstractControl) :{[key : string] : any} | null{
      
    let controlToCompare= control.parent.get(this.appRequiredIf);
    if (controlToCompare && control && controlToCompare.value ==="" && control.value ===""){

      return {requiredIf : true}
    }

    return null;
  }

}
