import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { of } from "rxjs";

import { Orcamento } from "../orcamento.model";
import { OrcamentoService } from "../orcamento.service";

@Injectable({
    providedIn: "root",
})
export class OrcamentoResolverService implements Resolve<Orcamento> {
    constructor(private orcamentoService: OrcamentoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params["id"];
        if (id) {
            return this.orcamentoService.pesquisarPorID(id);
        }
        return of({} as Orcamento);
    }
}
