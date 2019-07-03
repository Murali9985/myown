function check(e:AbstractControl){
if(e.value!='murali'){
  return {'vald':true}
}
}
function emailvalid(g:AbstractControl){
  if(!g.value.includes('ojas-it')){
    return {'emvalid':true}
  }
}
// function passw(control:AbstractControl){
//  const password=control.get('pass').value;
//  const cfmpassword=control.get('cpass').value;
//  if (password !== cfmpassword) {
 
//    control.get('cpass').setErrors({ npassmat: true });
// return {'npassmat':true}
// }
// }





import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray, FormBuilder, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
empfrm=new FormGroup({
  'uname':new FormControl('',[Validators.required,Validators.minLength(5),check]),
  'emid':new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]),
  'age':new FormControl('',[Validators.required,Validators.min(21),Validators.max(30)]),
  'email':new FormControl('',[Validators.required,emailvalid,Validators.email]),
  'pass':new FormControl('',Validators.required),
  // 'cpass':new FormControl('',[Validators.required,passw]),
  'edu':new FormGroup({
    'colg':new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]*')]),
    'per':new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.min(0),Validators.max(100)]),
    'passout':new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.min(1995),Validators.max(2020)])
  }),
  'address':new FormGroup({
    'door':new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
    'street':new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]*')]),
    'city': new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]*')]),
    'state':new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]*')]),
    'pin':new FormControl('',[Validators.required,Validators.pattern('[0-9]*')])
  }),
  'details':new FormArray([
    new FormGroup({
      'nnamee':new FormControl('',Validators.required),
      'ageage':new FormControl('',Validators.required)
    }),
  
  ]

  )
})
naaam;
aag;
idd;
eeeml;
st=false;
rf(){
  this.st=true;
this.naaam=this.empfrm.value.uname;
this.aag=this.empfrm.value.age;
this.idd=this.empfrm.value.emid;
this.eeeml=this.empfrm.value.email;

}
creat(){
  return new FormGroup({
    'nnamee':new FormControl(),
    'ageage':new FormControl()
  })
}

rem(h){
  
  (this.empfrm.get('details') as FormArray).removeAt(h);
}


svn(o){
  o.preventDefault();
(this.empfrm.get('details') as FormArray).push(this.creat());



  // this.q.push(this.empfrm.get('details'));
}



// constructor(private frmbld:FormBuilder){}
// jk=this.frmbld.group({
//   nnnm:['',Validators.required],
//   mmm:this.frmbld.group([{

//     nname:['',Validators.required],
//     ageag:['',Validators.required]
//   },
// {
//   nname:"",
//   ageag:""
// }])
// })











yes=false;
fnn(a){
  if(a=="nri"){
    this.yes=true;

  }
  if(a=="india")
  this.yes=false;
}
obj2;
status=false;
fn(a){
  this.obj2=a;
}
fnnn(b){
this.status=b;
}

pr;
ti;
rat;
cc;
emi;
cal(p,t,r){
// this.cc=(p*(r/12)/100)*((1+(r/12)/100))^t/(((1+(r/12)/100)^t)-1);
this.rat=(r/12)/100;
this.cc=p*this.rat*((1+this.rat)^t/((1+this.rat)^t)-1);

}



  
}
