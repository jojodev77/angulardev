import { Component, OnInit, ViewChild } from '@angular/core';
import { FonctionService } from 'src/app/services/fonction.service';
import { Fonction } from 'src/app/models/fonction.model';
import { Subject, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-fonction',
  templateUrl: './fonction.component.html',
  styleUrls: ['./fonction.component.css']
})
export class FonctionComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
functio: Array<Fonction>;




  constructor(private fs: FonctionService) { }

  ngOnInit() {
  this.fs.getFonctionJson().subscribe(
    (data => {this.functio = data;  }
    ));
  }

trier() {
  this.fs.getFonctionJsonTrier().subscribe(
    (data => {this.functio = data;  }
    ));
}
}
