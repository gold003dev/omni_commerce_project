<script>
import { createColumnHelper } from "@tanstack/vue-table";
import EditProduct from "./edit-product.vue";
import { h } from "vue";
import AvatarTitleGroup from "@/components/avatar-title-group.vue";
import { useLayoutStore } from "@/stores/layoutStore";

// use _ to name accessors with database related entities
// --- example: Suppliers.Name would be: supplier_Name
const columnHelper = createColumnHelper();
export const columns = [
  columnHelper.accessor("name", {
    label: "Name",
    enableSorting: true,
    cell: ({ row }) =>
      h(AvatarTitleGroup, {
        title: row.original.name,
        hideAvatar: true,
      }),
  }),
  columnHelper.accessor("description", {
    label: "Description",
    enableSorting: true
  }),
  columnHelper.accessor("id", {
    label: "Guid",
    enableSorting: true
  }),
  columnHelper.accessor("edit", {
    label: "",
    enableSorting: false,
    cell: ({ row }) =>
      h(EditProduct, {
        targetProduct: row.original,
      }),
  }),
];

</script>
