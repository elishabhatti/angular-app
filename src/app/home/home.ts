import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  constructor(private router: Router) {}
  // goToProfilePage(name: string) {
  //   this.router.navigate(['profile'], {
  //     queryParams: { name },
  //   });
  // }

}
