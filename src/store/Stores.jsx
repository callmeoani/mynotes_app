import { create } from "zustand";

export const useAddNewNoteModal = create((set) => ({
  isOpen: false,
  updateIsOpen: (isOpen) => set(() => ({ isOpen: isOpen })),
}));

export const useAllNotes = create((set) => ({
  allNotes: [],
  updateAllNotes: (allNotes) => set(() => ({ allNotes: allNotes })),
}));

export const useCurrentNavTab = create((set) => ({
  tabValue: "home",
  updateTabValue: (tabValue) => set(() => ({ tabValue: tabValue })),
}));

export const useHomeDisplayState = create((set) => ({
  displayState: "loading",
  updateDisplayState: (displayState) =>
    set(() => ({ displayState: displayState })),
}));

export const useNoteType = create((set) => ({
  noteType: "",
  updateSelectedNote: (noteType) => set(() => ({ noteType: noteType })),
}));
