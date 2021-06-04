import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { of } from "rxjs";

import { NormaTecnica } from "../model";
import { NormaTecnicaService } from "../service";

@Injectable({
    providedIn: "root",
})
export class NormaTecnicaResolverService implements Resolve<NormaTecnica> {
    constructor(private normaTecnicaService: NormaTecnicaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params["id"];
        if (id) {
            return this.normaTecnicaService.pesquisarPorID(id);
        }
        return of({} as NormaTecnica);
    }
}
