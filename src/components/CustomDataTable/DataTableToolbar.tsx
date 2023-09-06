import { Table } from "@tanstack/react-table";
import React, { ReactElement, ReactNode, cloneElement } from "react";
import TableSeach from "./TableSeach";
import { Button } from "@/components/ui/button";
import { Icons } from "@/lib/Icons";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
import { DataTableViewOptions } from "./DataTableViewOptions";



interface DataTableFilterOptionsType {
  id: string;
  value: string;
  label: string;
}

interface DataTableFilterType {
  id: string;
  columnKey: string;
  columnTitle: string;
  options: DataTableFilterOptionsType[];
}

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filters?: DataTableFilterType[];
  addModal?: ReactNode;
  accountType: string;
  addDataAuthorizedUsers: string[];
  multiDeleteModal?:  ReactElement<{ data: any }>;
  multiDeleteDataAuthorizedUsers: string[];
}

function DataTableToolbar<TData>({
  table,
  filters,
  addModal,
  accountType,
  addDataAuthorizedUsers,
  multiDeleteModal,
  multiDeleteDataAuthorizedUsers,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex w-full flex-wrap items-center justify-between">
      {/* Left Side */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Search All Columns */}
        <TableSeach
          className="h-8 w-full focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px]"
          placeholder="Search"
          value={table.getState().globalFilter as string}
          onChange={(value) => {
            table.setGlobalFilter(value);
          }}
        />

        {/* Dropdown Filters*/}
        {filters &&
          filters.map(
            (filter) =>
              table.getColumn(filter.columnKey) && (
                <DataTableFacetedFilter
                  key={filter.id}
                  column={table.getColumn(filter.columnKey)}
                  title={filter.columnTitle}
                  options={filter.options}
                />
              )
          )}

        {/* Filters Reset */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Icons.cancel className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      {/* Hide/View Column Button */}
      <div className="flex w-full items-center justify-end space-x-2 pt-2 md:w-fit lg:w-fit xl:w-fit 2xl:w-fit">
        {addModal && addDataAuthorizedUsers.includes(accountType) && addModal}
        {
          table.getSelectedRowModel().rows.length > 0 && (
            <>{multiDeleteModal && multiDeleteDataAuthorizedUsers.includes(accountType) && cloneElement(multiDeleteModal, { data:table.getSelectedRowModel().rows })}</>
          )
        }
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}

export default DataTableToolbar;
