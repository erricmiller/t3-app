import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icons } from "@/lib/Icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { ReactElement, ReactNode, useState } from "react";
import DataTablePagination from "./DataTablePagination";
import DataTableToolbar from "./DataTableToolbar";

export type multiDeleteType = {
  multiDeleteModal: ReactNode;
  multiDeleteDataAuthorizedUsers: string[];
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filters?: DataTableFilterType[];
  isFetching: boolean;
  accountType: string;
  addModal?: ReactNode;
  addDataAuthorizedUsers: string[];
  multiDeleteModal?: ReactElement<{ data: any }>;
  multiDeleteDataAuthorizedUsers: string[];
}

interface DataTableFilterType {
  id: string;
  columnKey: string;
  columnTitle: string;
  options: {
    id: string;
    value: string;
    label: string;
  }[];
}

const CustomDataTable = <TData, TValue>({
  columns,
  data,
  filters,
  isFetching,
  accountType,
  addModal,
  addDataAuthorizedUsers,
  multiDeleteModal,
  multiDeleteDataAuthorizedUsers,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="w-full space-y-4 overflow-auto">
      {/* ToolBar */}
      <DataTableToolbar
        table={table}
        filters={filters}
        addModal={addModal}
        accountType={accountType}
        addDataAuthorizedUsers={addDataAuthorizedUsers}
        multiDeleteModal={multiDeleteModal}
        multiDeleteDataAuthorizedUsers={multiDeleteDataAuthorizedUsers}
      />

      {/* Table */}
      <div className="w-full rounded-md border ">
        <Table>
          {/* Table Header */}
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="bg-muted/100">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {data.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {isFetching ? (
                    <Icons.spinner className="mx-auto h-10 w-10 animate-spin" />
                  ) : (
                    "No results."
                  )}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <DataTablePagination table={table} />
    </div>
  );
};

export default CustomDataTable;
