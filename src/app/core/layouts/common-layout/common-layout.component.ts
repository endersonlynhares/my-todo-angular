import {Component, Input} from '@angular/core';
import {User} from "../../../domain-types/models/User";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.sass']
})
export class CommonLayoutComponent {
}
