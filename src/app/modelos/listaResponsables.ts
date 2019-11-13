export class ListaResponsables{
    auditNumber: string;
    estadoActual: string;
    number: number;
    author: string;
    creationStamp: Date;
    dias: number;
    sector: string;
    origenPlanMejora: string;
    topic: string;
    sabor: string;
    size: string;
    responsible: string;
    answerType: string;

    constructor( auditNumber: string, estadoActual: string, number: number, author: string, creationStamp: Date, dias: number, sector: string, origenPlanMejora: string, topic: string, sabor: string, size: string, responsible: string, answerType: string ) {
        this.auditNumber = auditNumber;
        this.estadoActual = estadoActual;
        this.number = number;
        this.author = author;
        this.creationStamp = creationStamp;
        this.dias = dias;
        this.sector = sector;
        this.origenPlanMejora = origenPlanMejora;
        this.topic = topic;
        this.sabor = sabor;
        this.size = size;
        this.responsible = responsible;
        this.answerType = answerType;
    }

}
