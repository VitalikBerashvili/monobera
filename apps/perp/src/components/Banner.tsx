import Link from "next/link";

export default function Banner() {
  return (
    <header className="xl fixed top-[72px] z-50 flex h-12 w-[100vw] items-center justify-center gap-2 bg-yellow-600 px-1 py-3 text-white">
      <div className="flex items-center gap-2">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon/clock-9">
            <path
              id="Vector"
              d="M8.49992 14.6666C12.1818 14.6666 15.1666 11.6818 15.1666 7.99992C15.1666 4.31802 12.1818 1.33325 8.49992 1.33325C4.81802 1.33325 1.83325 4.31802 1.83325 7.99992C1.83325 11.6818 4.81802 14.6666 8.49992 14.6666Z"
              stroke="#F0F9FF"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M8.5 4V8H5.5"
              stroke="#F0F9FF"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        <div className="font-semibold leading-tight text-foreground">
          Validators can now point liquidity to berps and help launch the
          platform |{" "}
          <Link
            //    TODO: update link once ready
            href={`${process.env.NEXT_PUBLIC_FAUCET_URL}/#dapps`}
            className="underline"
            target="_blank"
          >
            Learn more
          </Link>
        </div>
      </div>
    </header>
  );
}
