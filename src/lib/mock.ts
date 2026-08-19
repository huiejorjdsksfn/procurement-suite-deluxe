/** Demo dataset for the Aegis Procure suite (no backend yet). */

export type Row = Record<string, string | number>;

export const KPI = {
  requisitions: 148,
  pendingPOs: 37,
  poValue: 8_420_000,
  grn: 92,
  suppliers: 214,
  vouchers: 26,
  payments: 1_240_000,
  budgetTotal: 12_500_000,
  budgetSpent: 8_930_000,
  inventory: 3_412,
  contracts: 58,
  tenders: 12,
  lowStock: 19,
};

export const requisitions: Row[] = [
  { ref: "REQ-2026-0418", title: "CNC tooling replenishment", dept: "Manufacturing", raised: "Ada Kowalski", value: 42800, date: "2026-08-14", status: "Pending Approval" },
  { ref: "REQ-2026-0417", title: "Site PPE — Q3 restock", dept: "HSE", raised: "Marcus Vane", value: 18650, date: "2026-08-13", status: "Approved" },
  { ref: "REQ-2026-0416", title: "Hydraulic pump spares", dept: "Maintenance", raised: "Priya Nandan", value: 76300, date: "2026-08-12", status: "In Review" },
  { ref: "REQ-2026-0415", title: "Fleet tyres — 24 units", dept: "Logistics", raised: "Tom Okafor", value: 31200, date: "2026-08-11", status: "Approved" },
  { ref: "REQ-2026-0414", title: "Lab reagents bulk order", dept: "Quality", raised: "Sofia Renn", value: 9450, date: "2026-08-10", status: "Rejected" },
  { ref: "REQ-2026-0413", title: "Server rack expansion", dept: "IT", raised: "Dev Rao", value: 128000, date: "2026-08-09", status: "Pending Approval" },
];

export const purchaseOrders: Row[] = [
  { ref: "PO-9241", supplier: "Halden Tooling Ltd", buyer: "A. Kowalski", value: 42800, delivery: "2026-08-28", status: "Issued" },
  { ref: "PO-9240", supplier: "Vertex Safety Group", buyer: "M. Vane", value: 18650, delivery: "2026-08-22", status: "Acknowledged" },
  { ref: "PO-9239", supplier: "Corrin Hydraulics", buyer: "P. Nandan", value: 76300, delivery: "2026-09-04", status: "Partially Received" },
  { ref: "PO-9238", supplier: "Mireth Fleet Supply", buyer: "T. Okafor", value: 31200, delivery: "2026-08-19", status: "Closed" },
  { ref: "PO-9237", supplier: "Northline Data Systems", buyer: "D. Rao", value: 128000, delivery: "2026-09-15", status: "Pending" },
];

export const goodsReceived: Row[] = [
  { ref: "GRN-4471", po: "PO-9238", supplier: "Mireth Fleet Supply", received: "2026-08-16", lines: 4, status: "Accepted" },
  { ref: "GRN-4470", po: "PO-9239", supplier: "Corrin Hydraulics", received: "2026-08-15", lines: 11, status: "Partial" },
  { ref: "GRN-4469", po: "PO-9235", supplier: "Vertex Safety Group", received: "2026-08-13", lines: 7, status: "Accepted" },
  { ref: "GRN-4468", po: "PO-9231", supplier: "Halden Tooling Ltd", received: "2026-08-11", lines: 3, status: "Quarantined" },
];

export const suppliers: Row[] = [
  { code: "SUP-0142", name: "Halden Tooling Ltd", category: "Tooling & Consumables", country: "United Kingdom", spend: 1_840_000, rating: "A", status: "Approved" },
  { code: "SUP-0138", name: "Corrin Hydraulics", category: "Mechanical Spares", country: "Germany", spend: 2_310_000, rating: "A", status: "Approved" },
  { code: "SUP-0129", name: "Vertex Safety Group", category: "PPE & Safety", country: "United States", spend: 640_000, rating: "B", status: "Approved" },
  { code: "SUP-0117", name: "Mireth Fleet Supply", category: "Fleet & Tyres", country: "Netherlands", spend: 415_000, rating: "B", status: "Under Review" },
  { code: "SUP-0104", name: "Northline Data Systems", category: "IT Hardware", country: "Canada", spend: 1_120_000, rating: "A", status: "Approved" },
  { code: "SUP-0091", name: "Basalt Chemicals", category: "Industrial Chemicals", country: "Spain", spend: 288_000, rating: "C", status: "Suspended" },
];

export const contracts: Row[] = [
  { ref: "CTR-2024-11", supplier: "Corrin Hydraulics", scope: "Spares framework agreement", value: 3_200_000, expiry: "2027-03-31", status: "Active" },
  { ref: "CTR-2025-04", supplier: "Halden Tooling Ltd", scope: "Tooling call-off contract", value: 1_750_000, expiry: "2026-12-31", status: "Active" },
  { ref: "CTR-2023-19", supplier: "Vertex Safety Group", scope: "PPE supply & laundering", value: 890_000, expiry: "2026-09-30", status: "Expiring" },
  { ref: "CTR-2022-07", supplier: "Basalt Chemicals", scope: "Solvent supply", value: 460_000, expiry: "2026-06-30", status: "Expired" },
];

export const tenders: Row[] = [
  { ref: "TND-2026-07", title: "Plant conveyor overhaul", method: "Open International", bids: 9, closing: "2026-09-02", status: "Open" },
  { ref: "TND-2026-06", title: "Three-year MRO framework", method: "Restricted", bids: 5, closing: "2026-08-25", status: "Evaluation" },
  { ref: "TND-2026-05", title: "Warehouse racking supply", method: "Open National", bids: 14, closing: "2026-08-08", status: "Awarded" },
  { ref: "TND-2026-04", title: "Calibration services", method: "Request for Quotation", bids: 6, closing: "2026-07-30", status: "Closed" },
];

export const items: Row[] = [
  { sku: "MRO-10221", name: "Carbide end mill 12mm", category: "Tooling", uom: "EA", qty: 42, reorder: 60, value: 18400 },
  { sku: "MRO-10188", name: "Hydraulic seal kit HK-40", category: "Spares", uom: "KIT", qty: 8, reorder: 25, value: 9600 },
  { sku: "SAF-20014", name: "Impact goggles clear", category: "PPE", uom: "EA", qty: 310, reorder: 150, value: 4650 },
  { sku: "FLT-30055", name: "Fleet tyre 315/80 R22.5", category: "Fleet", uom: "EA", qty: 16, reorder: 24, value: 20800 },
  { sku: "CHM-40071", name: "Degreaser concentrate 20L", category: "Chemicals", uom: "DRUM", qty: 4, reorder: 12, value: 2160 },
  { sku: "ITH-50033", name: "Rack server 2U 64GB", category: "IT Hardware", uom: "EA", qty: 3, reorder: 5, value: 46500 },
];

export const activity = [
  { t: "10:42", who: "A. Kowalski", what: "raised REQ-2026-0418 for $42,800", tone: "info" },
  { t: "10:08", who: "Approvals", what: "PO-9240 acknowledged by Vertex Safety Group", tone: "ok" },
  { t: "09:51", who: "Warehouse", what: "GRN-4468 quarantined — 3 lines failed inspection", tone: "warn" },
  { t: "09:20", who: "Finance", what: "Payment run PR-118 released — $412,000", tone: "ok" },
  { t: "08:47", who: "Sourcing", what: "TND-2026-06 moved to evaluation (5 bids)", tone: "info" },
  { t: "08:12", who: "System", what: "19 stock lines dropped below reorder point", tone: "warn" },
];

export const spendByCategory = [
  { label: "Mechanical Spares", value: 2_310_000 },
  { label: "Tooling", value: 1_840_000 },
  { label: "IT Hardware", value: 1_120_000 },
  { label: "PPE & Safety", value: 640_000 },
  { label: "Fleet", value: 415_000 },
  { label: "Chemicals", value: 288_000 },
];

export const monthlySpend = [
  { m: "Feb", v: 620 }, { m: "Mar", v: 780 }, { m: "Apr", v: 710 },
  { m: "May", v: 940 }, { m: "Jun", v: 1120 }, { m: "Jul", v: 1015 },
  { m: "Aug", v: 1240 },
];
