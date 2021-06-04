import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { of } from "rxjs";

import { Amostra } from "../amostra.model";
import { AmostraService } from "../amostra.service";

@Injectable({
    providedIn: "root",
})
export class AmostraResolverService implements Resolve<Amostra> {
    constructor(private amostraService: AmostraService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params["id"];
        if (id) {
            return this.amostraService.pesquisarPorID(id);
        }
        return of({} as Amostra);
    }
}
