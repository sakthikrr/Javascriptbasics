// ============================================
// EXPORT AGGREGATOR - Central export point
// ============================================

// Re-export everything from basic_export.js
export * from "./basic_export.js";

// Export authentication function
export function is_authenticated() {
    return true; // Placeholder for actual authentication logic
}
