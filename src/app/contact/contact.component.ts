import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ville } from '../models/Ville';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
    formations:any[];
   villes:any[];
   registerForm: FormGroup;
   submitted = false;
   loading = false;
   private register = false;
  constructor(private contactservice: ContactService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     this.loadPays();
     this.loadFormations();

   


    this.registerForm = this.formBuilder.group({
      nom: ['',Validators.required],
      prenom: ['', Validators.required],
      ville: [ '',Validators.required],
      telephone: ['', Validators.required],
      email: [ '',Validators.required],
      message: ['', Validators.required],
      societe: ['', Validators.required],
      fonction: ['', Validators.required],
      formation: ['', Validators.required],
      presence: [false, Validators.requiredTrue],
      enligne: [false, Validators.requiredTrue],
  }, );

  }

  get registerF() {
    /*return this.registerForm.controls;*/
    return this.registerForm.controls;
  }

  loadPays(){
    this.contactservice.getVilles().subscribe(
      data=>{ this.villes=data},
      error=>{console.log('An error was occured')},
      () => {console.log('loading pays was done')}
    );
  }

  loadFormations(){
    this.contactservice.getFormations().subscribe(
      data=>{ this.formations=data},
      error=>{console.log('An error was occured')},
      () => {console.log('loading formations was done')}
    );
  }

  onSubmit() {

    console.log(this.registerForm.value)
    this.register= true;

    // stop here if form is invalid
    

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

    this.contactservice.register(this.registerForm.value)
      
        .subscribe(
         
            data  => {
               alert("Verification e-mail sent");
            },
            
         );
         console.log(this.registerForm.value);
}





validechoix(){
  // this.test1=false;
   //this.test2=true
   this.registerForm.controls['fonction'].disable();
   this.registerForm.controls['societe'].disable();

 }
 validechoix1(){
  // this.test1=true;
  // this.test2=false
  this.registerForm.controls['fonction'].enable();
   this.registerForm.controls['societe'].enable();

}

}
