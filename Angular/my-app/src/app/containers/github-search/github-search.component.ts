import { Component ,OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { FormControl } from '@angular/forms';
import { debounceTime , distinctUntilChanged, switchMap,map} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css'],
  providers:[SearchService],
})
export class GithubSearchComponent  implements OnInit{
  search= new FormControl();
  constructor(
    private SearchService : SearchService,
    private activeRoute : ActivatedRoute,
    private router :Router,
    ){}

  ngOnInit() : void{
    this.activeRoute.queryParamMap.subscribe((par)=>{
      if(par.has('q')){
        this.search.setValue(par.get('q'));
        this.getRepos(par.get('q') as string);
      }
    });


    this
    .search
    .valueChanges
    .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((val) => this.SearchService.searchRepos(val)),
      )
    .subscribe((value)=>{
        console.log('data',value);
        this.router.navigate([],{queryParams : {q:this.search.value}})
       // this.getRepos(value);
    });
  }

  getRepos(query : string){
    this.SearchService.searchRepos(query).subscribe(
        (data) => console.log('success',data),
        (err)=> console.log('error',err)
    );
  }

}
