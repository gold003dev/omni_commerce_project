<script setup>
import { ref, computed } from "vue";
import simplebar from "simplebar-vue";
import { FlexRender, getCoreRowModel, useVueTable, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from "@tanstack/vue-table";
import { useLayoutStore } from "@/stores/layoutStore";
const layoutStore = useLayoutStore();

const props = defineProps({
  data: Object,
  columns: Array,
  loading: Boolean,
  currentPageMeta: Object,
  tablePaginationMeta: Object, // from server response, initially an empty object
  filterPlaceholder: String,
});
const emit = defineEmits(["onParamsChange"]);

const pageSizes = [5, 10, 25, 50];

const sorting = ref([]);
const filter = ref("");
const pagination = ref({});

const table = useVueTable({
  get data() {
    return props.data;
  },
  get columns() {
    return props.columns;
  },
  manualSorting: true,
  manualPagination: true,
  manualFiltering: true,
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
  },
  onPaginationChange: (updaterOrValue) => {
    pagination.value = typeof updaterOrValue === "function" ? updaterOrValue(pagination.value) : updaterOrValue;
    let updatedPageMeta = { ...props.currentPageMeta };


    if (pagination.value.pageSize && (pagination.value.pageSize != props.currentPageMeta.pageSize)) { // page size change
      updatedPageMeta.pageSize = pagination.value.pageSize;
      updatedPageMeta.pageNumber = 1;
    }
    else { // page index change
      updatedPageMeta.pageNumber = pagination.value.pageIndex; 
    }
    console.log(pagination.value)
    emit("onParamsChange", updatedPageMeta);
  },
  onSortingChange: (updaterOrValue) => {
    sorting.value = typeof updaterOrValue === "function" ? updaterOrValue(sorting.value) : updaterOrValue;
    let updatedPageMeta = { ...props.currentPageMeta };

    updatedPageMeta.sorting = sorting.value;
    emit("onParamsChange", updatedPageMeta);
  },
});


const infoDisplay = computed(() => {
  let firstDisplay = (props.tablePaginationMeta.pageSize * props.currentPageMeta.pageNumber) - props.tablePaginationMeta.pageSize + 1;
  let lastDisplay = props.tablePaginationMeta.pageSize * props.currentPageMeta.pageNumber;
  let totalPages = Math.ceil(props.tablePaginationMeta.totalCount / props.tablePaginationMeta.pageSize);
  if(props.currentPageMeta.pageNumber == totalPages){
    lastDisplay = props.tablePaginationMeta.totalCount;
  }
  if(props.tablePaginationMeta.totalCount == 0){
    return "No results";
  }
  return "Showing " + firstDisplay + " to " + lastDisplay + " of " + props.tablePaginationMeta.totalCount + " entries";
});
</script>

<template>
  <div class="card">
    <div class="card-body">
      <!-- Filters -->
      <div class="d-flex align-items-end gap-2">
        <div class="mb-2">
          <label for="searchInput" class="form-label">Search:</label>
          <input id="searchInput" type="text" :placeholder="props.filterPlaceholder" class="form-control" v-model="filter" style="max-width: 250px" />
        </div>
        <div class="mb-2">
          <button id="filter" type="button" class="btn btn-info" @click="() => emit('onParamsChange', { ...props.currentPageMeta, keyword: filter })">Filter</button>
        </div>
        <div class="mb-2">
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
            <template v-if="data.length">
              <b-tr v-for="row in table.getRowModel().rows" :key="row.id">
                <b-td v-for="cell in row.getVisibleCells()" :key="cell.id">
                  <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </b-td>
              </b-tr>
            </template>
            <template v-else>
              <b-tr>
                <b-td colspan="4">
                  <div class="text-center">No data available in table</div>
                </b-td>
              </b-tr>
            </template>
          </b-tbody>
        </b-table-simple>
      </simplebar>

      <!-- Loading Spinner -->
      <div v-if="loading" class="d-flex justify-content-center p-4">
        <span class="spinner-border spinner-border-sm avatar-sm text-primary" role="status" aria-hidden="true"></span>
      </div>
      <!-- Pagination -->
      <div class="table-footer">
        <div><span v-if="!loading">{{ infoDisplay }}</span></div>

        <!-- Size Dropdown -->
        <div class="d-inline-block me-3">
          <select class="form-select d-inline-block w-auto" :value="props.currentPageMeta.pageSize" @change="table.setPageSize($event.target.value)">
            <option :key="pageSize" :value="pageSize" v-for="pageSize in pageSizes">
              {{ pageSize }}
            </option>
          </select>
        </div>
        <!-- Pages -->
        <ul class="pagination pagination-rounded mb-0">
          <b-pagination v-model="props.currentPageMeta.pageNumber" :total-rows="props.tablePaginationMeta.totalCount" :per-page="props.currentPageMeta.pageSize" @update:modelValue="table.setPageIndex(props.currentPageMeta.pageNumber)"></b-pagination>
        </ul>
      </div>
    </div>
  </div>
</template>
