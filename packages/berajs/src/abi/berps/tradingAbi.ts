export const tradingAbi = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "UPGRADE_INTERFACE_VERSION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_msgSender",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "cancelOpenLimitOrder",
    inputs: [
      {
        name: "limitIndex",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "closeTradeMarket",
    inputs: [
      {
        name: "tradeIndex",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "priceUpdateData",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "delegatedAction",
    inputs: [
      {
        name: "trader",
        type: "address",
        internalType: "address",
      },
      {
        name: "call_data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "delegations",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "done",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "executeLimitOrder",
    inputs: [
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "priceUpdateData",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "feesAccrued",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IFeesAccrued",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "feesMarkets",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IFeesMarkets",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_pyth",
        type: "address",
        internalType: "address",
      },
      {
        name: "_orders",
        type: "address",
        internalType: "address",
      },
      {
        name: "_feesMarkets",
        type: "address",
        internalType: "address",
      },
      {
        name: "_feesAccrued",
        type: "address",
        internalType: "address",
      },
      {
        name: "_pythCfg",
        type: "tuple",
        internalType: "struct IEntrypoint.PythConfig",
        components: [
          {
            name: "confThresholdP",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "staleTolerance",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "useEma",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
      {
        name: "_maxPosHoney",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isDone",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isPaused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "maxPosHoney",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "multicall",
    inputs: [
      {
        name: "requireSuccess",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "data",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "openTrade",
    inputs: [
      {
        name: "t",
        type: "tuple",
        internalType: "struct IOrders.Trade",
        components: [
          {
            name: "trader",
            type: "address",
            internalType: "address",
          },
          {
            name: "pairIndex",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "index",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "initialPosToken",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "positionSizeHoney",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "openPrice",
            type: "int64",
            internalType: "int64",
          },
          {
            name: "buy",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "leverage",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "tp",
            type: "int64",
            internalType: "int64",
          },
          {
            name: "sl",
            type: "int64",
            internalType: "int64",
          },
        ],
      },
      {
        name: "orderType",
        type: "uint8",
        internalType: "enum ISettlement.TradeType",
      },
      {
        name: "slippageP",
        type: "int64",
        internalType: "int64",
      },
      {
        name: "priceUpdateData",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "orders",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IOrders",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "proxiableUUID",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pyth",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IPyth",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pythConfig",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IEntrypoint.PythConfig",
        components: [
          {
            name: "confThresholdP",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "staleTolerance",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "useEma",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "refundValue",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "removeDelegate",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setDelegate",
    inputs: [
      {
        name: "delegate",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setMaxPosHoney",
    inputs: [
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPyth",
    inputs: [
      {
        name: "_pyth",
        type: "address",
        internalType: "contract IPyth",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPythConfig",
    inputs: [
      {
        name: "_pythCfg",
        type: "tuple",
        internalType: "struct IEntrypoint.PythConfig",
        components: [
          {
            name: "confThresholdP",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "staleTolerance",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "useEma",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateOpenLimitOrder",
    inputs: [
      {
        name: "limitIndex",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "newPrice",
        type: "int64",
        internalType: "int64",
      },
      {
        name: "tp",
        type: "int64",
        internalType: "int64",
      },
      {
        name: "sl",
        type: "int64",
        internalType: "int64",
      },
      {
        name: "priceUpdateData",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "updateSl",
    inputs: [
      {
        name: "tradeIndex",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "newSl",
        type: "int64",
        internalType: "int64",
      },
      {
        name: "priceUpdateData",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "updateTp",
    inputs: [
      {
        name: "tradeIndex",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "newTp",
        type: "int64",
        internalType: "int64",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgradeToAndCall",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    name: "Done",
    inputs: [
      {
        name: "done",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MaxPosHoneyUpdated",
    inputs: [
      {
        name: "newValue",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OpenLimitCanceled",
    inputs: [
      {
        name: "index",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OpenLimitPlaced",
    inputs: [
      {
        name: "order",
        type: "tuple",
        indexed: false,
        internalType: "struct IOrders.OpenLimitOrder",
        components: [
          {
            name: "trader",
            type: "address",
            internalType: "address",
          },
          {
            name: "pairIndex",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "index",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "positionSize",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "buy",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "leverage",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "tp",
            type: "int64",
            internalType: "int64",
          },
          {
            name: "sl",
            type: "int64",
            internalType: "int64",
          },
          {
            name: "minPrice",
            type: "int64",
            internalType: "int64",
          },
          {
            name: "maxPrice",
            type: "int64",
            internalType: "int64",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OpenLimitUpdated",
    inputs: [
      {
        name: "index",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "newPrice",
        type: "int64",
        indexed: false,
        internalType: "int64",
      },
      {
        name: "newTp",
        type: "int64",
        indexed: false,
        internalType: "int64",
      },
      {
        name: "newSl",
        type: "int64",
        indexed: false,
        internalType: "int64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "paused",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PythConfigUpdated",
    inputs: [
      {
        name: "config",
        type: "tuple",
        indexed: false,
        internalType: "struct IEntrypoint.PythConfig",
        components: [
          {
            name: "confThresholdP",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "staleTolerance",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "useEma",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PythUpdated",
    inputs: [
      {
        name: "pyth",
        type: "address",
        indexed: false,
        internalType: "contract IPyth",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SlUpdated",
    inputs: [
      {
        name: "index",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "newSl",
        type: "int64",
        indexed: false,
        internalType: "int64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TpUpdated",
    inputs: [
      {
        name: "index",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "newTp",
        type: "int64",
        indexed: false,
        internalType: "int64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Upgraded",
    inputs: [
      {
        name: "implementation",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AddressEmptyCode",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "AmountOverflow",
    inputs: [],
  },
  {
    type: "error",
    name: "ERC1967InvalidImplementation",
    inputs: [
      {
        name: "implementation",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC1967NonPayable",
    inputs: [],
  },
  {
    type: "error",
    name: "EthTransferFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "FailedInnerCall",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidConfidence",
    inputs: [
      {
        name: "invalidConfP",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidExpo",
    inputs: [
      {
        name: "pythExpo",
        type: "int32",
        internalType: "int32",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidInitialization",
    inputs: [],
  },
  {
    type: "error",
    name: "MarketClosed",
    inputs: [],
  },
  {
    type: "error",
    name: "NotInitializing",
    inputs: [],
  },
  {
    type: "error",
    name: "UUPSUnauthorizedCallContext",
    inputs: [],
  },
  {
    type: "error",
    name: "UUPSUnsupportedProxiableUUID",
    inputs: [
      {
        name: "slot",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
] as const;
