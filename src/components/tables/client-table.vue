<script setup>
import { FlexRender, getCoreRowModel, useVueTable, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from "@tanstack/vue-table";
import { ref, computed } from "vue";
import { useLayoutStore } from "@/stores/layoutStore";
const layoutStore = useLayoutStore();
import simplebar from "simplebar-vue";

const props = defineProps({
  data: Object,
  columns: Array,
  loading: Boolean,
  filterPlaceholder: String,
});

const pageSizes = [5, 10, 25, 50];

const sorting = ref([]);
const filter = ref("");
const currentPage = ref(1);


const table = useVueTable({
  get data() {
    return props.data;
  },
  get columns() {
    return props.columns;
  },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  initialState: {
    pagination: {
      pageSize: layoutStore.pageSize,
    },
  },
  state: {
    get sorting() {
      return sorting.value;
    },
    get globalFilter() {
      return filter.value;
    },
  },
  onSortingChange: (updaterOrValue) => {
    sorting.value = typeof updaterOrValue === "function" ? updaterOrValue(sorting.value) : updaterOrValue;
  },
});

function handleGoToPage(index) {
  const page = index ? Number(index) - 1 : 0;
  currentPage.value = page + 1;
  table.setPageIndex(page);
}

function handlePageSizeChange(e) {
  table.setPageSize(Number(e.target.value));
}

const infoDisplay = computed(() => {
  let firstDisplay = (table.getState().pagination.pageSize * currentPage.value) - table.getState().pagination.pageSize + 1;
  let lastDisplay = table.getState().pagination.pageSize * currentPage.value;
  let totalPages = Math.ceil(table.getFilteredRowModel().rows.length / table.getState().pagination.pageSize);
  if(currentPage.value == totalPages){
    lastDisplay = table.getFilteredRowModel().rows.length;
  }
  if(table.getFilteredRowModel().rows.length == 0){
    return "No results";
  }
  return "Showing " + firstDisplay + " to " + lastDisplay + " of " + table.getFilteredRowModel().rows.length + " entries";
});



</script>

<template>
  <div class="card">
    <div class="card-body">
      <!-- Filters -->
      <div class="row align-items-end">
        <div class="col-sm-4 mb-2">
          <label for="searchInput" class="form-label">Search:</label>
          <input id="searchInput" type="text" :placeholder="props.filterPlaceholder" class="form-control" v-model="filter" style="max-width: 250px" />
        </div>
        <div class="col-sm-8 mb-2">
          <div class="text-sm-end"></div>
        </div>
      </div>
      <!-- Table  -->
      <simplebar class="table-responsive" data-simplebar-auto-hide="false">
        <b-table-simple class="table table-striped table-centered w-100 nowrap dataTable">
          <b-thead>
            <b-tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
              <b-th
                v-for="header in headerGroup.headers"
                :key="header.id"
                :colSpan="header.colSpan"
                @click="header.column.getToggleSortingHandler()?.($event)"
                :class="{
                  sorting: header.column.columnDef.enableSorting,
                  sorting_desc: header.column.getIsSorted() == 'desc',
                  sorting_asc: header.column.getIsSorted() == 'asc',
                }"
                :style="{ width: `${header.getSize()}px` }"
              >
                <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.label" :props="header.getContext()" />
              </b-th>
            </b-tr>
          </b-thead>
          <b-tbody v-if="!loading">
            <b-tr v-for="row in table.getRowModel().rows" :key="row.id">
              <b-td v-for="cell in row.getVisibleCells()" :key="cell.id">
                <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </simplebar>
      <!-- Loading Spinner -->
      <div v-if="loading" class="d-flex justify-content-center p-4">
        <span class="spinner-border spinner-border-sm avatar-sm text-primary" role="status" aria-hidden="true"></span>
      </div>
      <!-- Pagination -->
      <div class="table-footer">
        <!-- Size Dropdown -->
        <div><span v-if="!loading">{{ infoDisplay }}</span></div>
        <div class="d-inline-block me-3">
          <select class="form-select d-inline-block w-auto" :value="table.getState().pagination.pageSize" @change="handlePageSizeChange">
            <option :key="pageSize" :value="pageSize" v-for="pageSize in pageSizes">
              {{ pageSize }}
            </option>
          </select>
        </div>
        <!-- Pages -->
        <ul class="pagination pagination-rounded d-inline-flex align-item-center mb-0">
          <b-pagination v-model="currentPage" :total-rows="table.getFilteredRowModel().rows.length" :per-page="table.getState().pagination.pageSize" @update:modelValue="handleGoToPage"></b-pagination>
        </ul>
      </div>
    </div>
  </div>
</template>
