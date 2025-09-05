import { createContext, PropsWithChildren, useContext, useState } from "react";

/**
 * A single calculation consisting of two operands, an operation, and the result.
 */
export type Calculation = {
    a: number;
    b: number;
    operation: "+" | "-";
    result: number;
};

/**
 * Calculation history consists of two parts: the history as an array,
 * and a function to add new calculations to the history.
 */
type CalculationHistoryContext = {
    history: Calculation[];
    add: (calculation: Calculation) => void;
    clear: () => void;
};

/**
 * This is the actual context object, which is not directly exported.
 *  Instead, other components should use the `useCalculationHistory` hook
 *  and the `CalculationHistoryProvider` to access the context.
 */
const CalculationHistory = createContext<CalculationHistoryContext | undefined>(undefined);


/**
 * Custom hook to access the calculation history context. Requires that the
 * component is wrapped in a CalculationHistoryProvider.
 */
export function useCalculationHistory() {
    const context = useContext(CalculationHistory);
    if (!context) {
        throw new Error("useCalculationHistory must be used within a CalculationHistoryProvider");
    }
    return context;
};

/**
 * Provider component for the calculation history context. The purpose of this
 * component is to hold the shared state and provide it to its children.
 */
export function CalculationHistoryProvider({ children }: PropsWithChildren) {

    const [history, setHistory] = useState<Calculation[]>([]);

    const add = (calculation: Calculation) => {
        setHistory((prev) => [...prev, calculation]);
    };

    const clear = () => {
        setHistory([]);
    };

    return (
        <CalculationHistory.Provider value={{ history, add, clear }}>
            {children}
        </CalculationHistory.Provider>
    );
}
