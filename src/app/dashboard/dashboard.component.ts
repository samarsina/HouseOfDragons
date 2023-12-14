import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { sampleProducts } from '../product.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    input: string = '';
    domSanitize: any = ""
    htmlContent = '<p>This is a <strong>sanitized</strong> HTML content.</p>';
    //   public gridData: any[] = [
    //     {
    //         ProductID: 1,
    //         ProductName: 'Chai',
    //         UnitPrice: 18,
    //         Category: {
    //             CategoryID: 1,
    //             CategoryName: 'Beverages'
    //         },
    //         ProductAmount: 'Rs-500'
    //     },
    //     {
    //         ProductID: 2,
    //         ProductName: 'Chang',
    //         UnitPrice: 19,
    //         ProductAmount: 'Rs-500',
    //         Category: {
    //             CategoryID: 1,
    //             CategoryName: 'Beverages'
    //         }
    //     },
    //     {
    //         ProductID: 3,
    //         ProductName: 'Aniseed Syrup',
    //         UnitPrice: 10,
    //         ProductAmount: 'Rs-500',
    //         Category: {
    //             CategoryID: 2,
    //             CategoryName: 'Condiments'
    //         }
    //     },
    //     {
    //       ProductID: 1,
    //       ProductName: 'Chai',
    //       UnitPrice: 18,
    //       ProductAmount: 'Rs-500',
    //       Category: {
    //           CategoryID: 1,
    //           CategoryName: 'Beverages'
    //       }
    //   },
    //   {
    //       ProductID: 2,
    //       ProductName: 'Chang',
    //       UnitPrice: 19,
    //       ProductAmount: 'Rs-500',
    //       Category: {
    //           CategoryID: 1,
    //           CategoryName: 'Beverages'
    //       }
    //   },
    //   {
    //       ProductID: 3,
    //       ProductName: 'Aniseed Syrup',
    //       UnitPrice: 10,
    //       ProductAmount: 'Rs-500',
    //       Category: {
    //           CategoryID: 2,
    //           CategoryName: 'Condiments'
    //       }
    //   },
    //   {
    //     ProductID: 1,
    //     ProductName: 'Chai',
    //     UnitPrice: 18,
    //     ProductAmount: 'Rs-500',
    //     Category: {
    //         CategoryID: 1,
    //         CategoryName: 'Beverages'
    //     }
    // },
    // {
    //     ProductID: 2,
    //     ProductName: 'Chang',
    //     UnitPrice: 19,
    //     ProductAmount: 'Rs-500',
    //     Category: {
    //         CategoryID: 1,
    //         CategoryName: 'Beverages'
    //     }
    // },
    // {
    //     ProductID: 3,
    //     ProductName: 'Aniseed Syrup',
    //     UnitPrice: 10,
    //     ProductAmount: 'Rs-500',
    //     Category: {
    //         CategoryID: 2,
    //         CategoryName: 'Condiments'
    //     }
    // },
    // {
    //   ProductID: 1,
    //   ProductName: 'Chai',
    //   UnitPrice: 18,
    //   ProductAmount: 'Rs-500',
    //   Category: {
    //       CategoryID: 1,
    //       CategoryName: 'Beverages'
    //   }
    // },
    // {
    //   ProductID: 2,
    //   ProductName: 'Chang',
    //   UnitPrice: 19,
    //   ProductAmount: 'Rs-500',
    //   Category: {
    //       CategoryID: 1,
    //       CategoryName: 'Beverages'
    //   }
    // },
    // {
    //   ProductID: 3,
    //   ProductName: 'Aniseed Syrup',
    //   UnitPrice: 10,
    //   ProductAmount: 'Rs-500',
    //   Category: {
    //       CategoryID: 2,
    //       CategoryName: 'Condiments'
    //   }
    // },
    // {
    //   ProductID: 1,
    //   ProductName: 'Chai',
    //   UnitPrice: 18,
    //   ProductAmount: 'Rs-500',
    //   Category: {
    //       CategoryID: 1,
    //       CategoryName: 'Beverages'
    //   }
    // },
    // {
    //   ProductID: 2,
    //   ProductName: 'Chang',
    //   UnitPrice: 19,
    //   ProductAmount: 'Rs-500',
    //   Category: {
    //       CategoryID: 1,
    //       CategoryName: 'Beverages'
    //   }
    // },
    // {
    //   ProductID: 3,
    //   ProductName: 'Aniseed Syrup',
    //   UnitPrice: 10,
    //   ProductAmount: 'Rs-500',
    //   ProductType:"Chinese",
    //   Category: {
    //       CategoryID: 2,
    //       CategoryName: 'Condiments'
    //   }
    // }
    // ];
 

  // public gridData: unknown[] = sampleProducts;
  gridData: any[] = [];
  public pageSize = 6;
  public skip = 0;
  public columnWidth:any = '100%'; 
    constructor(private sanitize: DomSanitizer,private spinner: NgxSpinnerService) {
      this.gridData = [
        { id: 1, paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        // { id: 2, paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      ];
    }

    ngOnInit() {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);

    }

    public onResize(event:any): void {
  
    }

}
