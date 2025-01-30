import { create } from 'zustand';

export interface CounterState {
    count: number;

    incrementBy: ( value: number ) => void;
}

export const useCounterStore = create<CounterState>()( (set, get) => ({
    count: 0,

    incrementBy: ( value: number ) => {
        console.log(get());
        // Primera forma
        // const numTemp = get().count + value;
        // if( numTemp < 0 ) return;
        
        // set( () => ({ count: numTemp }) )

        // Segunda forma
        // if( (get().count + value) < 0 ) return;
        // set( (state) => ({ count: state.count + value }) )

        // Tercera forma
        if( (get().count + value) < 0 ) return;
        set( { count: get().count + value } )
    },
}))