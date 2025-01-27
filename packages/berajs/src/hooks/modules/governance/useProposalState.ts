import { SWRResponse } from "swr";
import useSWRImmutable from "swr/immutable";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

import { ProposalState } from "~/types";
import { GOVERNANCE_ABI } from "../../../abi";

const ProposalStateMap: Record<ProposalState, string> = {
  [ProposalState.Pending]: "pending",
  [ProposalState.Active]: "active",
  [ProposalState.Canceled]: "canceled",
  [ProposalState.Defeated]: "defeated",
  [ProposalState.Succeeded]: "succeeded",
  [ProposalState.Queued]: "queued",
  [ProposalState.Expired]: "expired",
  [ProposalState.Executed]: "executed",
};

export const useProposalState = ({
  proposalId,
  governorAddress,
}: {
  proposalId: number | bigint | string | undefined;
  governorAddress: Address;
}): SWRResponse<string> => {
  const publicClient = usePublicClient();

  const QUERY_KEY =
    governorAddress && publicClient && proposalId
      ? ["useProposalSnapshot", proposalId]
      : null;

  return useSWRImmutable(QUERY_KEY, async () => {
    if (!publicClient) {
      throw new Error("public client is not defined");
    }

    const snapshot = (await publicClient.readContract({
      abi: GOVERNANCE_ABI,
      address: governorAddress,
      functionName: "state",
      args: [BigInt(proposalId!)],
    })) as ProposalState;

    return ProposalStateMap[snapshot];
  });
};
