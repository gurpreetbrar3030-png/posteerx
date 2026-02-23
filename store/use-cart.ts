import { create } from "zustand";

type CartState = {
  slugs: string[];
  add: (slug: string) => void;
  remove: (slug: string) => void;
};

export const useCart = create<CartState>((set) => ({
  slugs: [],
  add: (slug) => set((state) => ({ slugs: [...state.slugs, slug] })),
  remove: (slug) => set((state) => ({ slugs: state.slugs.filter((item) => item !== slug) }))
}));
