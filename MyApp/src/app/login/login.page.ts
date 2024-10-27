import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email:any;
  public password:any;

  constructor(
    public router:Router,
    public fireService:FireserviceService
  ) { }

  ngOnInit() {
  }

  
  login() {
    this.fireService.loginWithEmail({ email: this.email, password: this.password })
      .then(res => {
        console.log(res);
        if (res.user && res.user.uid) {
          this.fireService.getDetails({ uid: res.user.uid }).subscribe(
            userDetails => {
              if (userDetails) { // Verifique se userDetails não é null
                console.log(userDetails);
                alert('Bem-vindo ');
              } else {
                alert('Não foi possível obter os detalhes do usuário.');
              }
            },
            err => {
              console.error('Erro ao obter detalhes do usuário:', err);
              alert('Não foi possível obter os detalhes do usuário.');
            }
          );
        }
      })
      .catch(err => {
        alert(err.message);
        console.error('Erro no login:', err);
      });
  }
  


  signup(){
    this.router.navigateByUrl('signup');
  }

}
