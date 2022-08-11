import type { exportPerformaceData, exportTimingData } from '../types/timing'

export function saveToStorage(data: exportTimingData | exportPerformaceData, key: string) {
  localStorage.setItem(key, JSON.stringify(data))
}
