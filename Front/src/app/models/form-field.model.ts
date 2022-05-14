export interface FormFieldModel {
    id: string;
    contractId: string;
    title: string;
    subtitle: string;
    description: string;
    recurrence: number;
    individual: boolean;
    required: boolean;
    firstRequestDate: Date;
}