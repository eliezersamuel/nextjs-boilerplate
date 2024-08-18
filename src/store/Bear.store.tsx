import { create } from "zustand";
import { devtools } from "zustand/middleware";
// import { immer } from "zustand/middleware/immer";

interface BearState {
    bears: number;
    increase: () => void;
}

export const useBearStore = create<BearState>()(
    devtools(
        (set) => ({
            bears: 0,
            increase: () => set((state) => ({ bears: state.bears + 1 })),
        }),
        {
            name: "bear-storage",
        },
    ),
);
