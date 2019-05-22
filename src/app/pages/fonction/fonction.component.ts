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


  constructor(private fs: FonctionService) { }

  ngOnInit() {
  this.fs.getFonctionJson().subscribe(
// tslint:disable-next-line: prefer-const
    (data => {const functio = data; console.log(data); })
  );
  }

}
