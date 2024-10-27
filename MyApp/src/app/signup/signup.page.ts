import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email:any;
  public password:any;
  public name:any;
  constructor(
    public fireService:FireserviceService
  ) { }

  ngOnInit() {
  }

  signup() {
    this.fireService.signup({ email: this.email, password: this.password })
      .then(res => {
        if (res.user && res.user.uid) {
          const data = {
            email: this.email,
            password: this.password,
            nome: this.name, // Use 'nome' para ser consistente
            uid: res.user.uid
          };
          this.fireService.saveDetails(data).then(() => {
            alert('Conta criada com sucesso!');
          }).catch(err => {
            console.error('Erro ao salvar detalhes do usuário:', err);
            alert('Não foi possível salvar os detalhes da conta.');
          });
        }
      })
      .catch(err => {
        alert(err.message);
        console.error('Erro no cadastro:', err);
      });
  }
  

}
