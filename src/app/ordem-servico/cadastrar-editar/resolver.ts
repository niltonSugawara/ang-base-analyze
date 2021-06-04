import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { of } from "rxjs";

import { OrdemServico } from "../model";
import { OrdemServicoService } from "../service";

@Injectable({
    providedIn: "root",
})
export class OrdemServicoResolverService implements Resolve<OrdemServico> {
    constructor(private ordemServicoService: OrdemServicoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params["id"];
        if (id) {
            return this.ordemServicoService.pesquisarPorID(id);
        }
        return of({} as OrdemServico);
    }
}
