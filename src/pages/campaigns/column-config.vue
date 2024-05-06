<script>
import { createColumnHelper } from "@tanstack/vue-table";
import EditCampaign from "./edit-campaign.vue";
import { h } from "vue";
import AvatarTitleGroup from "@/components/avatar-title-group.vue";
import { useLayoutStore } from "@/stores/layoutStore";
import TypeBadge from "@/components/campaigns/types-badge.vue";

// use _ to name accessors with database related entities
// --- example: Suppliers.Name would be: supplier_Name
const columnHelper = createColumnHelper();
export const columns = [
  columnHelper.accessor("campaignName", {
    label: "Name",
    enableSorting: true,
    cell: ({ row }) =>
      h(AvatarTitleGroup, {
        title: row.original.campaignName,
        hideAvatar: true,
      }),
  }),

columnHelper.accessor("campaignType", {
  label: "Type",
  enableSorting: true,
  cell: (info) => {
    switch (info.getValue()) {
      case 0:
        return h(TypeBadge, { type: "Ecommerce" });
      case 1:
        return h(TypeBadge, { type: "Landers" });
      case 2:
        return h(TypeBadge, { type: "Phone" });
      default:
        return info.getValue();
    }
  },
}),

  columnHelper.accessor("currency.currencyCode", {
    label: "Currency",
    enableSorting: true
  }),
 columnHelper.accessor("edit", {
    label: "",
    enableSorting: false,
    cell: ({ row }) =>
      h(EditCampaign, {
        targetCampaign: row.original,
      }),
  }),
];

</script>
