"use client";

import { type Pool } from "@bera/bera-router";
import { useBeraJs, usePollBgtRewards } from "@bera/berajs";
import {
  ConnectWalletBear,
  DataTable,
  NotFoundBear,
  SearchInput,
} from "@bera/shared-ui";
import { cn } from "@bera/ui";
import { Badge } from "@bera/ui/badge";
import { Button } from "@bera/ui/button";
import { Icons } from "@bera/ui/icons";
import { Skeleton } from "@bera/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@bera/ui/tabs";

import { columns, my_columns } from "~/components/pools-table-columns";
import { PoolCard, PoolCardLoading } from "./PoolCard";
import { usePoolTable } from "./usePoolTable";

const FilterBadge = ({
  text,
  active,
  onClick,
}: {
  text: string;
  active: boolean;
  onClick: any;
}) => {
  return (
    <Badge
      className={cn(
        "border-border bg-muted font-medium text-muted-foreground hover:cursor-pointer hover:bg-info",
        active ? "border-info-foreground bg-info text-info-foreground" : "",
      )}
      onClick={onClick}
    >
      {text}
    </Badge>
  );
};

const Toggle = ({
  icon,
  onClick,
  className,
}: {
  icon: any;
  className?: string;
  onClick: any;
}) => {
  return (
    <div
      className={cn(
        "cursor-pointer rounded-full p-2 text-muted-foreground hover:bg-hover",
        className,
      )}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

const TableViewLoading = () => (
  <div className="mt-16 flex flex-col items-center gap-4">
    <Skeleton className="h-[150px] w-[238px]" />
    <Skeleton className="h-7 w-[300px]" />
    <Skeleton className="h-7 w-[451px]" />
    <Skeleton className="h-7 w-[130px]" />
  </div>
);

const CardViewLoading = () => (
  <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    {[0, 0, 0, 0].map((_, index) => (
      <PoolCardLoading key={index} />
    ))}
  </div>
);

export const PoolSearch = () => {
  const {
    data,
    userPools,
    allDataSize,
    setAllDataSize,
    isAllDataLoadingMore,
    isAllDataReachingEnd,
    search,
    setSearch,
    hasBgtRewards,
    setHasBgtRewards,
    isNewPool,
    setIsNewPool,
    isHotPool,
    setIsHotPool,
    isList,
    setIsList,
    isUserPoolsLoading,
    handleEnter,
    setKeyword,
  } = usePoolTable();
  const { isReady } = useBeraJs();
  const receivers = userPools?.map((pool: Pool) => pool.pool) || [];
  const { useBgtRewards } = usePollBgtRewards(receivers);
  const { data: bgtRewards } = useBgtRewards();

  console.log(data);
  return (
    <div
      className="w-full flex-col items-center justify-center"
      id="poolstable"
    >
      <Tabs defaultValue="allPools" className="flex flex-col gap-4">
        <TabsList className="w-fit" variant="ghost">
          <TabsTrigger
            value="allPools"
            className="w-full sm:w-fit"
            variant="ghost"
          >
            All pools
          </TabsTrigger>
          <TabsTrigger
            value="userPools"
            className="w-full sm:w-fit"
            variant="ghost"
          >
            My pools
          </TabsTrigger>
        </TabsList>

        <div className="flex w-full flex-col items-center justify-center gap-2 lg:flex-row lg:items-center lg:justify-between">
          <SearchInput
            value={search}
            onChange={(e) => {
              if (e.target.value === "") {
                setKeyword("");
                setSearch("");
              } else {
                setSearch(e.target.value);
              }
            }}
            placeholder="Search..."
            onKeyDown={handleEnter}
            id="all-pool-search"
            className="w-full md:w-[400px]"
          />

          <div className="flex w-full flex-row flex-wrap items-center justify-center gap-2 lg:justify-end">
            <FilterBadge
              text={"🚀 New Pools"}
              active={isNewPool}
              onClick={() => setIsNewPool(!isNewPool)}
            />
            <FilterBadge
              text={"🔥 Hot Pools"}
              active={isHotPool}
              onClick={() => setIsHotPool(!isHotPool)}
            />
            <FilterBadge
              text={"🐝 BGT Rewards"}
              active={hasBgtRewards}
              onClick={() => setHasBgtRewards(!hasBgtRewards)}
            />
            <Toggle
              icon={!isList ? <Icons.list /> : <Icons.layoutDashboard />}
              onClick={() => setIsList(!isList)}
            />
          </div>
        </div>

        <TabsContent value="allPools" className="text-center">
          {isAllDataLoadingMore && data?.length === 0 ? (
            <div className="flex w-full flex-col items-center justify-center gap-4">
              {isList ? <TableViewLoading /> : <CardViewLoading />}
            </div>
          ) : data && data.length ? (
            isList ? (
              <div className="flex w-full flex-col items-center justify-center gap-4">
                <DataTable
                  key={data.length}
                  data={data ?? []}
                  columns={columns}
                  title={`All Pools (${data.length})`}
                  className="min-w-[1000px]"
                />
              </div>
            ) : (
              <div className="flex w-full flex-col items-center justify-center gap-4">
                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {data &&
                    data[0] &&
                    data.map((pool: any) => {
                      return (
                        <PoolCard pool={pool} key={"search" + pool?.pool} />
                      );
                    })}
                </div>
              </div>
            )
          ) : (
            <NotFoundBear title="No Pools found." />
          )}

          {!isAllDataLoadingMore && data && data?.length > 0 && (
            <Button
              className="mt-8"
              onClick={() => setAllDataSize(allDataSize + 1)}
              disabled={isAllDataLoadingMore || isAllDataReachingEnd}
              variant="outline"
            >
              {isAllDataReachingEnd ? "No more pools" : "View More"}
            </Button>
          )}
        </TabsContent>

        <TabsContent value="userPools">
          {!isReady ? (
            <ConnectWalletBear
              message="You need to connect your wallet to see deposited pools and
            rewards"
            />
          ) : isUserPoolsLoading ? (
            <div className="flex w-full flex-col items-center justify-center gap-4">
              {isList ? <TableViewLoading /> : <CardViewLoading />}
            </div>
          ) : userPools === undefined || userPools.length === 0 ? (
            <NotFoundBear title="No Pools found." />
          ) : isList ? (
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <DataTable
                data={
                  userPools.map((pool: any) => ({
                    ...pool,
                    bgtRewards:
                      bgtRewards && bgtRewards[pool.pool]
                        ? bgtRewards[pool.pool]
                        : "0",
                  })) ?? []
                }
                columns={my_columns}
                title={`My Pools (${userPools.length})`}
              />
            </div>
          ) : (
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {userPools &&
                  userPools[0] &&
                  userPools.map((pool: any) => {
                    return (
                      <PoolCard
                        pool={pool}
                        key={"search" + pool?.pool}
                        isUserData={true}
                      />
                    );
                  })}
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
