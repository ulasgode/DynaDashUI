import { Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { DashboardService } from "src/app/services/dashboard.service";
import { DashMenu } from 'src/app/models/dash-menu.model';
import { DashMenuItem } from 'src/app/models/dash-menu-item.model';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  dashMenu: DashMenu;
  @Output("onScreenClick") onScreenClick = new EventEmitter();

  constructor(private dashboardService: DashboardService) {
    this.onDashMenuLoad();
    if (!this.dashMenu) {
      this.dashMenu = new DashMenu();
    }
  }

  public ngOnInit() {
    
  }

  onDashMenuLoad(){
    this.dashboardService.loadDashMenuItems().subscribe((response: DashMenu) => {
      this.dashMenu = response;
    });
  }

  onParentChange(menu: any){
    window.alert(menu.name + " is Clicked");
  }

  onScreenChange(screen: any){
    debugger;
    this.onScreenClick.emit(screen);
  }
}
