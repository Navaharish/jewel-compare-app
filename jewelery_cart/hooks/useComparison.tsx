import { createContext, useContext, useState, ReactNode } from 'react';

interface JewelryItem {
  id: string;
  image: string;
  productType: string;
  goldKaratage: number;
  goldWeight: number;
  diamondWeight: number;
  totalPrice: number;
  laborCharges: number;
  designCode: string;
}

interface ComparisonContextType {
  comparisonItems: JewelryItem[];
  addToComparison: (item: JewelryItem) => void;
  removeFromComparison: (itemId: string) => void;
  clearComparison: () => void;
  isInComparison: (itemId: string) => boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [comparisonItems, setComparisonItems] = useState<JewelryItem[]>([]);

  const addToComparison = (item: JewelryItem) => {
    if (comparisonItems.length >= 4) {
      alert('Maximum 4 items can be compared at once');
      return;
    }
    if (!comparisonItems.some(i => i.id === item.id)) {
      setComparisonItems([...comparisonItems, item]);
    }
  };

  const removeFromComparison = (itemId: string) => {
    setComparisonItems(comparisonItems.filter(item => item.id !== itemId));
  };

  const clearComparison = () => {
    setComparisonItems([]);
  };

  const isInComparison = (itemId: string) => {
    return comparisonItems.some(item => item.id === itemId);
  };

  return (
    <ComparisonContext.Provider
      value={{
        comparisonItems,
        addToComparison,
        removeFromComparison,
        clearComparison,
        isInComparison,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
} 