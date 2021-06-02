import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { of } from "rxjs";

import { TecnicoQuimico } from "../tecnico-quimico.model";
import { TecnicoQuimicoService } from "../tecnico-quimico.service";

@Injectable({
    providedIn: "root",
})
export class TecnicoQuimicoResolverService implements Resolve<TecnicoQuimico> {
    constructor(private tecnicoQuimicoService: TecnicoQuimicoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params["id"];
        if (id) {
            return this.tecnicoQuimicoService.pesquisarPorID(id);
        }
        return of({} as TecnicoQuimico);
    }
}
