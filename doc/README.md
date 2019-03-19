
bitcoin-epoch [![Build status](https://travis-ci.org/strong-roots-capital/bitcoin-epoch.svg?branch=master)](https://travis-ci.org/strong-roots-capital/bitcoin-epoch) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/bitcoin-epoch.svg)](https://npmjs.org/package/@strong-roots-capital/bitcoin-epoch)
===========================================================================================================================================================================================================================================================================================================================

> Start of the Bitcoin epoch

Provides a `Date` object representing the start of the Bitcoin epoch.

Install
-------

```shell
npm install @strong-roots-capital/bitcoin-epoch
```

Use
---

```typescript
import { BITCOIN_EPOCH } from '@strong-roots-capital/bitcoin-epoch'
console.log(BITCOIN_EPOCH.valueOf())
//=> 1230940800000
```

Acknowledgments
---------------

*   Satoshi Nakamoto

## Index

### Variables

* [BITCOIN_EPOCH](#bitcoin_epoch)

---

## Variables

<a id="bitcoin_epoch"></a>

### `<Const>` BITCOIN_EPOCH

**● BITCOIN_EPOCH**: *`Date`* =  new Date('2009-01-03T00:00:00.000Z')

*Defined in [bitcoin-epoch.ts:10](https://github.com/strong-roots-capital/bitcoin-epoch/blob/44a2c83/src/bitcoin-epoch.ts#L10)*

Date representing the start of the Bitcoin epoch.

___

