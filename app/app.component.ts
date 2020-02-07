import { Component } from '@angular/core';

import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  users: any[] = [{id:1,name: 'John' }, {id:2, name: 'Jane' }, {id:3, name: 'Mario' }];
  userss: any[] = [{id:1,name: 'John' }, {id:2, name: 'Jane' }, {id:3, name: 'Mario' }];
  s:any;
  userFilter: any = { name: '' };

  constructor(private filterPipe: FilterPipe) {
    console.log(filterPipe.transform(this.users, { name: 'M'}));
  }
}
