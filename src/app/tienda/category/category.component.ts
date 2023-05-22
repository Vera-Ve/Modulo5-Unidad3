import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreService } from '../services/fakestore.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit  {
  category = '';
  items: any[] = [];
   
  constructor(private _apiStore: FakestoreService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      console.log(this.category);
      this.getData();
    });
  }

  getData() {
    this._apiStore.getItems(this.category).subscribe((data:any) => {
      this.items=data;
      console.log(data);
      });
  }
}
