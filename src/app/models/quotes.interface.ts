import { Service } from './service.interface';

export interface Quote {
    id?: number,
    date: string,
    information?: string,
    company: {
        company: string,
        address: string,
        contactEmail: string,
        contactName: string,
        contactPhone: number,
        rif: number
    },
    service?:{
        identification: string,
        observations: string,
        others: string,
        quantity: number,
        service: Service,
        state: string,
        type: string,
        use: string,
    }
}