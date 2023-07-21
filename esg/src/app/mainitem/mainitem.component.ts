import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainitem',
  templateUrl: './mainitem.component.html',
  styleUrls: ['./mainitem.component.css']
})
export class MainitemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // 點擊mainitem時在新分頁中打開Iframe頁面
  openIframePage(): void {
    this.router.navigateByUrl('/iframe-dialog');
  }

}
