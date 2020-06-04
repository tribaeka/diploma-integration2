import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ResourceService} from '../../services/resource.service';
import {DataTransferService} from '../../services/data-transfer.service';

@Component({
  selector: 'app-job-search-input',
  templateUrl: './job-search-input.component.html',
  styleUrls: ['./job-search-input.component.scss']
})
export class JobSearchInputComponent implements OnInit {
  searchForm: FormGroup;
  query: string;
  subQuery: string;
  private readonly xIconPath: string;
  private readonly xFilledIconPath: string;
  activePath: string;
  showDropDown: boolean;
  activeOption: string;
  options: string[];
  @Input() isSubQueryEnabled: boolean;
  @Input() target: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder,
    private resourceService: ResourceService,
    private dataTransferService: DataTransferService
  ) {
    this.searchForm = builder.group({
      query: ''
    });
    this.xIconPath = '../../assets/icons/x-circle.svg';
    this.xFilledIconPath = '../../assets/icons/x-circle-fill.svg';
    resourceService.getAutocompleteSearchDictionary().subscribe(data => this.options = data);
  }

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query');
    this.activePath = this.xIconPath;
    this.dataTransferService.currentSubQuery.subscribe(subQuery => this.subQuery = subQuery);
  }

  getUnionQuery() {
    if (this.isSubQueryEnabled) { return this.query + this.subQuery; } else { return this.query; }
  }

  updateQueryOnChange(inputValue: string) {
    this.query = inputValue;
    this.dataTransferService.changeSubQuery('');
  }

  updateQueryOnSelectOption(option: string) {
    if (this.query === null || !this.query.includes(' ')) {
      this.query = option + ' ';
    } else {
      const queryArray = this.query.split(' ');
      queryArray[queryArray.length - 1] = option;
      this.query = queryArray.join(' ') + ' ';
    }
  }

  startSearch() {
    switch (this.target) {
      case 'job':
        this.router.navigate(['job/search', this.getUnionQuery()]);
        break;
      case 'cv':
        this.router.navigate(['cv/search', this.getUnionQuery()]);
        break;
      default: this.router.navigate(['job/search', this.getUnionQuery()]);
    }
    this.closeDropDown();
  }

  mouseEnterHandler() {
    this.activePath = this.xFilledIconPath;
  }

  mouseLeaveHandler() {
    this.activePath = this.xIconPath;
  }

  clearInput() {
    this.query = '';
    this.dataTransferService.changeSubQuery('');
  }

  openDropDown() {
    this.showDropDown = true;
  }

  closeDropDown() {
    this.showDropDown = false;
  }

  setActiveOption(option: string) {
    this.activeOption = option;
  }
}
