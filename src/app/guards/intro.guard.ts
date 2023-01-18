import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {Storage} from '@ionic/storage'


@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private storage: Storage,  private router: Router){

  }
  
  async canActivate() {
    const intro = await this.storage.get('isIntroShowed');
    if (intro){
      return true;
    } 
     this.router.navigateByUrl('/intro') 
     return  false;
  }
  
}
