import { Component, OnInit, ViewChild } from '@angular/core';
import { SecureService } from "./secure.service";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {


  constructor(private router: Router, private secureService: SecureService) { 
    // this.secureService.checkToken().subscribe((res) => {
    // }, err => {
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('shopUrl');
    //   this.router.navigate(['/login']);
    // });
  }

  ngOnInit() {
    
  }

}