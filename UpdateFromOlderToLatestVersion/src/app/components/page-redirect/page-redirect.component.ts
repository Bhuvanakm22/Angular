// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { UrlService } from 'src/app/services/url.service';
// biome-ignore lint/style/useImportType: <explanation>
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-redirect',
  standalone: false,
  templateUrl: './page-redirect.component.html',
  styleUrls: ['./page-redirect.component.css']
})
export class PageRedirectComponent implements OnInit {

  constructor(private service: UrlService, private route: ActivatedRoute) { }

  ngOnInit() {
    // biome-ignore lint/complexity/noForEach: <explanation>
    this.route.params.forEach((params: Params) => {
      this.service.findById(params.id).subscribe(res => 
        {
          window.location.href = res.url
        });
    });
  }
}
