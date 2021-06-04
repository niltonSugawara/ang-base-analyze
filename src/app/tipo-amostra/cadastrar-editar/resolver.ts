import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { of } from "rxjs";

import { TipoAmostra } from "../model";
import { TipoAmostraService } from "../service";

@Injectable({
    providedIn: "root",
})
export class TipoAmostraResolverService implements Resolve<TipoAmostra> {
    constructor(private tipoTipoAmostraService: TipoAmostraService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params["id"];
        if (id) {
            return this.tipoTipoAmostraService.pesquisarPorID(id);
        }
        return of({} as TipoAmostra);
    }
}
