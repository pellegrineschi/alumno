import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../../../courses/models';


@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.scss',
})
export class StudentDialogComponent {
  alumForm: FormGroup;



  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingAlum?:Alumno
  ) {
    this.alumForm = fb.group({
      name:[null, Validators.required],
      lastname:[null, Validators.required],
      date:[],
      email: [null,  Validators.email],
      phone:[null, Validators.required]

    })

    if(this.editingAlum){
      this.alumForm.patchValue(this.editingAlum)
    }
  }

  onSubmit():void{
    if(this.alumForm.valid){
      this.matDialogRef.close(this.alumForm.value)
    }else
    alert('complete el formulario')

  }






}
