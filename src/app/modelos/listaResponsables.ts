import { AuditDocument } from './auditDocument';
import { NonConformanceDocument } from './nonConformanceDocument';
import { Persona } from './usuario';
export class ListaResponsables {
    auditNumber;
    estadoActual;
    number;
    author;
    creationStamp;
    dias;
    sector;
    origenPlanMejora;
    topic;
    sabor;
    size;
    responsible;
    answerType;

    constructor(private auditDocumentList: AuditDocument[], private nonConformanceDocumentList: NonConformanceDocument[]) {

      
    }

}
