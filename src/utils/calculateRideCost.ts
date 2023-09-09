export const UNLOCK_FEE = 1; // 1€
export const COST_PER_KM = 0.98; // 0.98€/km

export const rideCost = (distance: number) => {
  return (distance * COST_PER_KM + UNLOCK_FEE).toFixed(2) 
}
