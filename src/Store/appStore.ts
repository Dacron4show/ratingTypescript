import { create } from "zustand";

interface yourStore {
  isSubmitted: boolean;
  setIsSubmitted: (isSubmitted: boolean) => void;
  submitHandler: () => void;
  clicked: number | null;
  setClicked: (val: number | null) => void;
  value: number | null;
  setValue: (val: number | null) => void;
}
export const appStore = create<yourStore>((set) => ({
  isSubmitted: false,
  setIsSubmitted: (isSubmitted: boolean) => set({ isSubmitted }),
  clicked: null,
  setClicked: (val: number | null) => set(() => ({ clicked: val })),
  value: null,
  setValue: (val: number | null) => set(() => ({ value: val })),

  submitHandler: () => {
    set({
      isSubmitted: true,
    });
  },
}));
