import { Component, OnInit } from '@angular/core';
import { FakestoreService } from './services/fakestore.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  categories: string[] = [];
  //products: any[] = [];
  constructor(private _apiStore: FakestoreService) {

  }
  ngOnInit() {
    this.getCategories();

  }
  getCategories() {
    this._apiStore.getCategories().subscribe((data: any) => {
      this.categories = data;
      console.log(data);
    });
  }
  //getProductsByCategory(category: string): void {
        //this._apiStore. getProductsByCategory(category).subscribe((data: any[]) => {
      //this.products = data;
   // });
 // }
}
