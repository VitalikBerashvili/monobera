import { useState } from "react";
import { Button } from "@bera/ui/button";
import { Dialog, DialogContent } from "@bera/ui/dialog";
import { Address } from "viem";

import { DelegateContent } from "./delegate-content";
import { ActionButton } from "@bera/shared-ui";

export const DelegateModal = ({
  validator,
  setIsValidatorDataLoading,
}: {
  validator: Address;
  setIsValidatorDataLoading: (loading: boolean) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ActionButton>
        <Button onClick={() => setOpen(true)}>Boost</Button>
      </ActionButton>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full md:w-[550px]">
          <DelegateContent
            validator={validator}
            setIsValidatorDataLoading={setIsValidatorDataLoading}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
