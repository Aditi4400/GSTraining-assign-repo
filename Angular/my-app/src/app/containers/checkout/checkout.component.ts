import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  checkoutForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl('test@mail.com', {
      updateOn: 'change',
      validators: [Validators.required],
    }),
    address: new FormArray([]),
  },
    { updateOn: 'change' }
  );
  get addressObj(){
    return this.checkoutForm.get('address') as FormArray;
  }
  newAddress()
  {
    return new FormGroup({
      city: new FormControl(),
      pincode: new FormControl(),
    });
  }

  addAddress(){
    this.addressObj.push(this.newAddress());
  }
  removeAddress(index: number){
    this.addressObj.removeAt(index);
  }
  zipcodeValidator() {
    return (control: AbstractControl) => {
      if (control.value == 123456) {
        // valid
        return null;
      }
      // invalid
      return {
        // name_of_error:information_related_to_error
        zipcode: {
          validCode: 123456,
          enteredCode: control.value,
        },
      };
    };
  }

  saveData(): void {
    if (this.checkoutForm.valid) {
      console.log('form submission logic', this.checkoutForm.value);
    }
  }

  loadData() {
    const data = {
      name: 'hi',
      email: "test@mail.com",
      address: {
      city: null,
      pincode: null,
      },
    };
    this.checkoutForm.setValue(data);
  }

  patchData() {
    const data = {
      name: 'hello',
      email : 'acc@mail.com',
      };
      this.checkoutForm.patchValue(data);
    }
  }

