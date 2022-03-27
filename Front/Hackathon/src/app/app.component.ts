import { Component } from '@angular/core';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hackathon';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService){ }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => { this.mostrarMenu = mostrar ; console.log(this.mostrarMenu)}
      
    );
  }
}
