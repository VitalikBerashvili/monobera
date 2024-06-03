import React, { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { usePollGauges } from "@bera/berajs";
import type { TableState } from "@tanstack/react-table";

import { TableLoading } from "~/app/validators/components/table-loading";
import { global_gauge_weight_columns } from "~/columns/global-gauge-weight-columns";

const DataTable = dynamic(
  () => import("@bera/shared-ui").then((mod) => mod.DataTable),
  {
    ssr: false,
    loading: () => <TableLoading />,
  },
);

export default function GlobalGaugeWeightTable({
  myGauge = false,
  keywords = "",
}: {
  myGauge?: boolean;
  keywords?: string;
}) {
  const { gaugeList, isLoading, isValidating } = usePollGauges();
  // const [page, setPage] = useState(0);
  // const fetchData = useCallback(
  //   (state: TableState) => setPage(state?.pagination?.pageIndex),
  //   [setPage],
  // );
  console.log("gaugeList", gaugeList);
  return (
    <div className="w-full ">
      <DataTable
        // fetchData={fetchData}
        // enablePagination
        loading={isLoading}
        validating={isValidating}
        columns={global_gauge_weight_columns as any}
        data={gaugeList ?? []}
        className="min-w-[1100px] shadow"
        // additionalTableProps={{
        //   pageCount: 1,
        //   manualFiltering: true,
        //   manualSorting: true,
        //   manualPagination: true,
        // }}
        onRowClick={(row: any) =>
          window.open(
            `/gauge/${row.original.address}${myGauge ? "?my-gauge" : ""}`,
            "_self",
          )
        }
      />
    </div>
  );
}
