import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';
import { CategoryService } from 'src/app/services/category.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import * as _ from "lodash";
import * as $ from "jquery"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public headerCollections : any = [];
  public baseCollection : any = [];
  public collection:any=[];
  public otherCollections:any=[];
  public categories:any=[];
  public Object = Object;
  public idis:any=[];
  public hoveredItemId: number = 0;
  public headerCollectionLength:number = environment.headerCollectionLength;
  public numberId : any = [];

  constructor(private collectionService: CollectionService,
              private categoryService: CategoryService,
              private router : Router) { }

  ngOnInit(): void {

    
    $(document).ready(function() {
      "use strict";
      $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
      $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
      $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">&nbsp;</a>");
      $(".menu > ul > li").hover(function(e) 
      {
        if ($(window).width() as any > 943) {
          $(this).children("ul").stop(true, false).fadeToggle(150);
          e.preventDefault();
        }
      });
      $(".menu > ul > li").click(function() {
        if ($(window).width()as any <= 943) {
          $(this).children("ul").fadeToggle(150);
        }
      });
      $(".menu-mobile").click(function(e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
      });
    });
    $(window).resize(function() {
      $(".menu > ul > li").children("ul").hide();
      $(".menu > ul").removeClass('show-on-mobile');
    });

    this.getCollection();
    this.getCategories();
  
  }
   getCollection(){
     this.collectionService.getAllCollection().subscribe(response=>{

       this.baseCollection=response;
       console.log(this.baseCollection);
       this.baseCollection.filter((response:any) => {
         
         if(response.id<6){
          this.headerCollections.push(response);
        }else{
          this.otherCollections.push(response);
         }
      })
        console.log(this.otherCollections);
        console.log(this.collection);
      })
      return this.otherCollections;
    }

     getCategories(){
      this.categoryService.getAllCategories().subscribe(response=>{
      this.categories=response;
      console.log(this.categories);
     })
    }

   /**
   * 
   * @param id 
   */

  showCategoryDropdown(id:any){
    this.hoveredItemId = id;
    (document.getElementById('cat-' + id)as any).style.display = 'block';
  }
  /**
   * 
   * @param id 
   */

  hideDropDown(id:any){
    this.hoveredItemId = 0;
    (document.getElementById('cat-' + id)as any).style.display = 'none';
  }

  showPagesDropdown(){
    (document.getElementById('pages_ul')as any).style.display = 'block';
  }

  hidePagesDropDown(){
    (document.getElementById('pages_ul')as any).style.display = 'none';
  }
  
  onChange(item:any,categoryName:any){
     console.log("hi am onChange function ");
     const obj = {'item_id' : item.id , item_name : item.name ,category : categoryName}
     this.router.navigate([`app/products`],{queryParams : {'sub_id' : item.id , item_name : item.name ,category : categoryName}});
  }
}
