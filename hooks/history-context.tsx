import { Calculation } from "@/app/(lists)/calculator";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type ContextProps = {
    history: Calculation[],
    setHistory: (c: Calculation[]) => void
}

const HistoryContext = createContext<ContextProps>({
    history: [],
    setHistory: () => { throw new Error("context being used outside of a provider") }
})

export function HistoryProvider({ children }: PropsWithChildren) {

    const [history, setHistory] = useState<Calculation[]>([])

    return (
        <HistoryContext.Provider value={{ history, setHistory }} >
            {children}
        </HistoryContext.Provider>
    );
}

export function useCalculationHistory() {
    return useContext(HistoryContext);
}
