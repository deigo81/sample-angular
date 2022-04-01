import { Component, OnInit } from '@angular/core';
import { dataSource } from './dataSource';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 servers = [];

 appstatus = new Promise((resolve,reject)=>{

    setTimeout (()=>{ 
        resolve('stable');
    },2000);

});
  
 
 
  ngOnInit(): void {
    this.servers =  new dataSource().getSource();
  }
 
  

  filteredStatus='';

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer(){
      this.servers.push({
      instanceType: 'small',
      name:'New Server',
      status: 'stable',
      started: new Date (15,1,2017)
    });
  }
}
