<script>
import { h } from "vue";
import { createColumnHelper } from "@tanstack/vue-table";
import EditUser from './edit-user.vue'
import AvatarTitleGroup from '@/components/avatar-title-group.vue'
import RoleBadge from '@/components/role-badge.vue'
import ActiveBadge from '@/components/active-badge.vue'

const columnHelper = createColumnHelper();
export const columns = [
  columnHelper.accessor("firstName", {
    label: "Name",
    enableSorting: true,
    cell: ({ row }) =>
      h(AvatarTitleGroup, {
        title: row.original.firstName + " " + row.original.lastName,
        image: row.original.imageUrl,
      }),
  }),
  columnHelper.accessor("roleId", {
    label: "Role",
    enableSorting: true,
    cell: ({ row }) =>
      h(RoleBadge, {
        role: row.original.roleId,
      }),
  }),
  columnHelper.accessor("email", {
    label: "Email",
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
  columnHelper.accessor("edit", {
    label: "",
    enableSorting: false,
    cell: ({ row }) =>
      h(EditUser, {
        targetUser: row.original
      }),
  }),
];

</script>
