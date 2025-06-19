import { create } from 'zustand'

type Variable = {
  id: string
  name: string
  description: string
  active: boolean
}

type DashboardState = {
  variables: Variable[]
  selectedVariableId: string | null
  setVariables: (vars: Variable[]) => void
  toggleVariable: (id: string) => void
  setSelectedVariable: (id: string | null) => void
}

export const useDashboardStore = create<DashboardState>((set) => ({
  variables: [],
  selectedVariableId: null,

  setVariables: (vars) => set({ variables: vars }),

  toggleVariable: (id) =>
    set((state) => ({
      variables: state.variables.map((v) =>
        v.id === id ? { ...v, active: !v.active } : v
      ),
    })),

  setSelectedVariable: (id) => set({ selectedVariableId: id }),
}))