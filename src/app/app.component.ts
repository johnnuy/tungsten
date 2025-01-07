import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCard } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatCard,
    FormsModule,
    NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidenavOpen = true;
  selectedNetwork = 'Mainnet';
  selectedLanguage = 'English';
  networks = ['Mainnet', 'Testnet', 'Devnet'];
  languages = ['English', 'Spanish', 'French', 'None'];
}