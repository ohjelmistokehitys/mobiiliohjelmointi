import { Calculation } from "@/types/calculator";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type HistoryProps = {
    history: Calculation[],
    setHistory: (history: Calculation[]) => void
};

export const HistoryContext = createContext<HistoryProps>({ history: [], setHistory: () => { } });

export function useCalculationHistory() {
    return useContext(HistoryContext);
}

export function CalculationProvider({ children }: PropsWithChildren) {
    const [history, setHistory] = useState<Calculation[]>([]);

    return <HistoryContext.Provider value={{ history, setHistory }}>
        {children}
    </HistoryContext.Provider>;
}
