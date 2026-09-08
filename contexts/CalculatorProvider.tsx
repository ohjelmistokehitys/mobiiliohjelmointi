import { createContext, PropsWithChildren, useState } from "react";
import { Calculation } from "../app/(calculator)/calculator";

export const CalculatorContext = createContext({
    history: [] as Calculation[],
    setHistory: (h: Calculation[]) => { }
});

export default function CalculatorProvider({ children }: PropsWithChildren) {
    const [history, setHistory] = useState<Calculation[]>([]);

    return <CalculatorContext value={{ history, setHistory }}>
        {children}
    </CalculatorContext>;
}
