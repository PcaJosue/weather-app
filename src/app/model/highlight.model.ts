export interface Highlight {
    description: string;
    info: { value: number, metric: string },
    graphic?: {
        icon?: string,
        label: string | number,
        type: string,
        value?: number
    }
}