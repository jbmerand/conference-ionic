import {Component, OnInit} from '@angular/core';
import {DeviceInfo, NetworkStatus, Plugins} from '@capacitor/core';

const {Device} = Plugins;
const {Network} = Plugins;

@Component({
    selector: 'app-telephone',
    templateUrl: './telephone.page.html',
    styles: [],
})
export class TelephonePage implements OnInit {

    infoDevice: DeviceInfo;
    infoReseau: NetworkStatus;
    isErreurRecuperationDeviceInfo: boolean;
    isErreurRecuperationReseauInfo: boolean;

    constructor() {
    }

    ngOnInit(): void {
        Device.getInfo().then(
            (infos => {
                this.isErreurRecuperationDeviceInfo = false;
                this.infoDevice = infos;
            }),
            (() => this.isErreurRecuperationDeviceInfo = true)
        );
        Network.getStatus().then(
            (infos => {
                this.isErreurRecuperationReseauInfo = false;
                this.infoReseau = infos;
            }),
            (() => this.isErreurRecuperationReseauInfo = true)
        );
    }

}
