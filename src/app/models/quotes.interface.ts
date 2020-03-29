export interface Quote {
    id?: number,
    received_date: string,
    company_name: string,
    company_rif: string;
    company_address: string;
    contact_name:string;
    contact_phone: string;
    contact_email:string;
    sample_type: string;
    sample_physical_state: string;
    sample_usage:string;
    sample_quantity: string;
    sample_identification: string;
    service_id: number;
    other_service: string;
    observations: string;
    readed: string;
    title: string;
    description: string;
    category_id: number;
}