import { Component, inject, model, Signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { MatIcon } from '@angular/material/icon';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'tungsten-search-panel',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatInputModule, 
    MatButtonModule,
    MatIcon,
    FormsModule
  ],
  templateUrl: './search-panel.component.html',
  styleUrl: './search-panel.component.css'
})
export class SearchPanelComponent {
  
  private walletService = inject(WalletService);

  url = model('');

  doSearch() {
    console.log('URL submitted:', this.url());
    this.walletService.updateWallet(this.url(), 500_000_000);
  }
}
