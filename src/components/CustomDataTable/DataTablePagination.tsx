"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icons } from "@/lib/Icons";
import { Table } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(table.getState().pagination.pageIndex + 1);
  }, [table.getState().pagination.pageIndex]);

  const jumptoPage = (pageNumber: number) => {
    // table.setPageIndex(parseInt(e.target.value) - 1)
    if (pageNumber <= 1) {
      table.setPageIndex(0);
      setPage(1);
    } else if (pageNumber >= table.getPageCount()) {
      table.setPageIndex(table.getPageCount() - 1);
      setPage(table.getPageCount());
    } else {
      table.setPageIndex(pageNumber - 1);
      setPage(pageNumber);
    }
  };
  return (
    <div className="flex w-full flex-col items-center justify-center xl:flex-row xl:items-center xl:justify-between 2xl:flex-row 2xl:items-center 2xl:justify-between">
      {/* Pagination Stats */}
      <div className="flex w-full items-center justify-center  xl:justify-start 2xl:justify-start ">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>

      {/* Pagination Functinality */}
      <div className="flex w-full flex-col items-center justify-center lg:mt-2 lg:flex-row lg:justify-between xl:mt-0 xl:w-fit xl:flex-row xl:justify-end xl:gap-2 2xl:mt-0 2xl:w-fit 2xl:flex-row 2xl:justify-end 2xl:gap-2">
        {/* Pagination Number of Rows Select */}
        <div className="flex w-full items-center justify-center  lg:mt-0 lg:justify-start xl:justify-end 2xl:justify-end">
          <p className="w-[130px] text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px] focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Pagination Page Selections */}
        <div className="mt-2 flex w-full items-center justify-between lg:mt-0 lg:w-fit xl:mt-0 xl:w-fit xl:justify-end xl:gap-2 2xl:mt-0 2xl:w-fit 2xl:justify-end 2xl:gap-2">
          {/* Pagination Jump to Specific Page Input */}
          <div className="flex items-center justify-start gap-2 text-sm font-medium lg:w-[140px] xl:w-[140px] 2xl:w-[140px] ">
            Page
            <Input
              type="number"
              className="h-8 w-[50px]  [appearance:textfield] focus-visible:ring-0  focus-visible:ring-offset-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              min={1}
              max={table.getPageCount() - 1}
              value={page}
              onChange={(e) => {
                jumptoPage(parseInt(e.target.value));
              }}
            />
            of {table.getPageCount()}
          </div>

          {/* Pagination Jump to Specific Page Buttons */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className=" h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <Icons.speedPrevious className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <Icons.previous className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <Icons.next className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className=" h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <Icons.speedNext className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTablePagination;
