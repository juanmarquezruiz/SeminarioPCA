import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  loginForm: FormGroup;

  validation_message = {
    email: [
      { type: "required", message: "El Email es Obligatorio" },
      { type: "pattern", message: "Tu email no es valido" }
    ],
    password: [
      { type: "required", message: "El password es Obligatorio" },
      { type: "pattern", message: "No contiene el mínimo de caracteres" }
    ]
  }
  errorMessage: any;
  constructor(private formBuilder: FormBuilder
            , private authenticate: AuthenticateService
            , private navCtrl: NavController
            , private storage: Storage
            , private alertController: AlertController) {

    this.loginForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])),
      password: new FormControl("", Validators.compose([Validators.required, Validators.minLength(8)]))
    });
  }

  ngOnInit() {
    console.log('login check');
  }

  // loginUser(data: any) {
  //   console.log(data);

  //   this.authenticate.loginUser(data).then(r => {
  //     this.errorMessage = "";
  //     this.storage.set("isUserLoggedIn", true);
  //     this.navCtrl.navigateForward("/menu/home");

  //   }).catch(e => {
  //     this.errorMessage = e;
  //   })

  // }
  loginUser(data: any) {
    console.log(data);
    this.authenticate.loginUser(data).then( (res: any) => {
      this.storage.set("isUserLoggedIn", true);
      this.storage.set("user_id", res.user.id);
      this.navCtrl.navigateForward("/menu/home");
    }).catch(err => {
      this.presentAlert("Opps", "Hubo un error", err);
    });
  }

  // toRegister(){
  //   this.navCtrl.navigateBack("register");
  // }

  async presentAlert(header: any, subHeader: any, message: any) {
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['Ok']
      }
    );
    await alert.present();
  }

}
