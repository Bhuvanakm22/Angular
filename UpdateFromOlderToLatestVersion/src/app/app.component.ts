import { Component } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { UrlService } from './services/url.service';


@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'url-shortener';
  shortenUrl: string;

  constructor(private urlService: UrlService) {
   }

  add(url: string): void {
    url.trim();
    
    if (!url) return;

    this.urlService.save(url).subscribe(res => 
      {this.shortenUrl = `${window.location.href}${res.id}`
  });
   }
}
