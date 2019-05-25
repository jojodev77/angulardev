import { Component, OnInit } from '@angular/core';
import { FonctionService } from 'src/app/services/fonction.service';
import { Fonction } from 'src/app/models/fonction.model';


@Component({
  selector: 'app-fonction',
  templateUrl: './fonction.component.html',
  styleUrls: ['./fonction.component.css']
})
export class FonctionComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
functio: any[];

  constructor(private fs: FonctionService) { }

  ngOnInit() {
  this.fs.getFonctionJson().subscribe(
// tslint:disable-next-line: prefer-const
    (data => {this.functio = data;
     this.functio = Array.push(this.functio);  })
  );
  }

}
