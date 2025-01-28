import { Component, effect, inject, model, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SearchPanelComponent } from './search-panel/search-panel.component'
import { SidePanelComponent } from "./side-panel/side-panel.component";
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCard,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    SearchPanelComponent,
    SidePanelComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {    
  }

  isSidenavOpen = true;
  selectedNetwork = 'Mainnet';
  selectedLanguage = 'English';
  networks = ['Mainnet', 'Testnet', 'Devnet'];
  languages = ['English', 'Spanish', 'French', 'None'];
}