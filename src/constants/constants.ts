import projects from "@data/projects.json";

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

const BRAND_PROJECTS = projects.filter((p) => p.type === "Brand");
const PRODUCT_PROJECTS = projects.filter((p) => p.type === "Product");
const WEB_PROJECTS = projects.filter((p) => p.type === "Website");

export const SORTED_PROJECTS = {
  All: projects,
  Web: WEB_PROJECTS,
  Brand: BRAND_PROJECTS,
  Product: PRODUCT_PROJECTS,
};
