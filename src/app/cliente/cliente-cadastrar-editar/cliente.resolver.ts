import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { of } from "rxjs";

import { Cliente } from "../cliente.model";
import { ClienteService } from "../cliente.service";

@Injectable({
    providedIn: "root",
})
export class ClienteResolverService implements Resolve<Cliente> {
    constructor(private clienteService: ClienteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params["id"];
        if (id) {
            return this.clienteService.pesquisarPorID(id);
        }
        return of({} as Cliente);
    }
}
