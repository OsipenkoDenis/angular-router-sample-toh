import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisisId: any;
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  gotoCrises(){
  this.router.navigate(['../', { id: this.crisisId, foo: 'foo' }], { relativeTo: this.route });
  }
}
