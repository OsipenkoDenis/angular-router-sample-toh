import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Crisis } from '../crisis';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis!: Crisis;
  editName = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        const crisis: Crisis = data['crisis'];
        this.editName = crisis.name;
        this.crisis = crisis;
      });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?');
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }
}
