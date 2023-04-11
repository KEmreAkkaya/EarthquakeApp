import { FormControl } from "@angular/forms";

export class WhiteSpaceControl
{
    static trimValidator (control: FormControl) {
        if (control.value.startsWith(' ')) {
        const isWhiteSpace = control.value.startsWith('');
        const isValid =!isWhiteSpace;
          return isValid ? null : { 'whitespace': true };
        }
        if (control.value.endsWith(' ')) {
        const isWhiteSpace = control.value.endsWith('');
        const isValid =!isWhiteSpace;
          return isValid ? null : { 'whitespace': true };;
        }
      
        return null;
      };
}