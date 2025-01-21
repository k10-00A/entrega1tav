export interface Pago {
    monto: number;
    fecha: string;
  }
  
  export interface Gasto {
    id: number;
    categoriaId: number;
    monto: number;
    fecha: string;
    descripcion: string;
    tipo: 'debito' | 'credito';
    cuotas: number;  
    pagos: Pago[];  
  }