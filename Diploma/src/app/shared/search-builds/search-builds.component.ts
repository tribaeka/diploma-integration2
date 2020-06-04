import {Component, Input, OnInit} from '@angular/core';
import {ResourceService} from '../../services/resource.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-builds',
  templateUrl: './search-builds.component.html',
  styleUrls: ['./search-builds.component.scss']
})
export class SearchBuildsComponent implements OnInit {
  @Input() target: string;
  builds: Map<string, string>;
  constructor(private resourceService: ResourceService, private router: Router) { }

  ngOnInit() {
    this.resourceService.getPopularSearchBuilds().subscribe(data => this.builds = data);
  }

  navigateToSearch(query: string) {
    switch (this.target) {
      case 'job':
        this.router.navigate(['job/search', query]);
        break;
      case 'cv':
        this.router.navigate(['cv/search', query]);
        break;
      default: this.router.navigate(['job/search', query]);
    }
  }
}
