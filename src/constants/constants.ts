export enum ProjectFilters {
  All = "All",
  Web = "Web",
  Product = "Product",
  Brand = "Brand",
}

export const PROJECT_FILTERS = [
  { id: "1fi", label: "All", value: ProjectFilters?.All },
  { id: "2fi", label: "Web", value: ProjectFilters?.Web },
  { id: "3fi", label: "Product", value: ProjectFilters?.Product },
  { id: "4fi", label: "Brand", value: ProjectFilters?.Brand },
];
