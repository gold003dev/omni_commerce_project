<script>
import { h } from "vue";
import { createColumnHelper } from "@tanstack/vue-table";
import ActiveBadge from "@/components/active-badge.vue";
import AvatarTitleGroup from "@/components/avatar-title-group.vue";
import EditTenant from "./edit-tenant.vue";

const columnHelper = createColumnHelper();
export const columns = [
  columnHelper.accessor("name", {
    label: () => "Name",
    enableSorting: true,
    cell: ({ row }) =>
      h(AvatarTitleGroup, {
        title: row.original.name,
        hideAvatar: true,
      }),
  }),
  columnHelper.accessor("id", {
    label: "Key",
    enableSorting: true,
  }),

  columnHelper.accessor("isActive", {
    label: "Active",
    enableSorting: true,
    size: 30,

    cell: ({ row }) =>
      h(ActiveBadge, {
        isActive: row.original.isActive,
      }),
  }),
  columnHelper.accessor("id", {
    label: "",
    enableSorting: false,
    cell: ({ row }) =>
      h(EditTenant, {
        targetTenant: row.original,
      }),
  }),
];
</script>
