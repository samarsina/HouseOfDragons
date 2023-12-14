import { ChangeDetectorRef, Component } from '@angular/core';
import { NewsService } from './news.service';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js/auto';
import { NgxSpinnerService } from "ngx-spinner";
export class piedata {
  'id': number;
  'title': string
  'releaseDate': any;
  'Appeal':number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news';
  datares:any[]=[];
  dataset: any=[];
  chartdata:any[]= [];
  chalanData : any[] = [100,300,600]
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,

  };
  public pieChartLabels = ['Total sales','apeeal','dragon'];

  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartDatasets = [{
    // data: [300,500,200],
    data : this.chalanData,
    backgroundColor: ['red','green','blue']
  }];

  appeal: any;


  constructor(private newsService: NewsService,private cdr: ChangeDetectorRef,private spinner: NgxSpinnerService) {

  }



  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  
    console.log("first")
    // let data=  document.getElementById('demo');
    // if(data ){
    //   data.innerHTML = "Justin";
    //   console.log(data)
    // }
    // this.getNews();
    this.chartData();
    // this.cdr.detectChanges()
    this.getData();
    
  }




  getNews() {
    this.newsService.getNews().subscribe((res: any) => {
      console.log(res)
      this.datares = res;
    },
      (error) => {
        console.log("error", error)
      })
  }

  getData(): void {
    
    this.newsService.getData().subscribe((res:any) => {
      console.log("data 1", res)
      if(res){
        // console.log("data 2",res)
        this.datares = res;
        //  this.datares.forEach(item=>{
        //   console.log("item foreach",item.Appeal)
        //   this.chartdata.push(item.Appeal)
        //   console.log("item this.chartdata",this.chartdata)
        //  })
     for(let i =0; i < this.datares.length;i++ ){
        console.log("for loop data ",this.datares[i])
        
        console.log("this.chartdata ",this.chartdata)
        
     }
     
      }
    //  for(let data of res){
    //   this.datares.push( data);
    //   console.log("data get",this.datares)
    //  }
    })
  }


  onclick() {
    document.getElementById('demo')?.remove()
  }


  chartData() {
    let myChart = new Chart('myChart', {
      type: 'pie',
      data: {
        labels: ["Enero", "Febrero", "Marzo"],
        datasets: [{
          label: ' Peso',
          data: [75, 82, 83],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 5
        }]
      },
      options: <any>{
        legend: {
          display: false,
        },
        responsive: false,
        scales: {
          xAxes: {
            stacked: true
          },
          yAxes: {
            stacked: true
          }
        }
      }
    });
  }

  public barChartLegend = true;
  public barChartPlugins = [];
  barData = [ 65, 59, 80, 81, 56, 55, 40 ]
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: this.barData, label: 'Series A',backgroundColor:'red' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B',backgroundColor:'blue' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
}

