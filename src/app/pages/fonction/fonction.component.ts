import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FonctionService } from 'src/app/services/fonction.service';
import { Fonction } from 'src/app/models/fonction.model';
import { Subject, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-fonction',
  templateUrl: './fonction.component.html',
  styleUrls: ['./fonction.component.css']
})
export class FonctionComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
functio: Array<Fonction>;
formTrier: FormGroup;
@ViewChild('trier')
  pass: ElementRef;


  constructor(private fs: FonctionService, private fb: FormBuilder) { }
// afficher toute donnee fonction

  ngOnInit() {
  this.fs.getFonctionJson().subscribe(
    (data => {this.functio = data;  }
    ));
    this formTrier = this.fb.group({
      tri: ''
    });
  }
// affichez donnee trier fonction
trier() {
  this.fs.getFonctionJsonTrier().subscribe(
    (data => {this.functio = data;  }
    ));
    
}
}
