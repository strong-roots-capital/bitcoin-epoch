import test from 'ava'

/**
 * Library under test
 */

import { BITCOIN_EPOCH } from '../src/bitcoin-epoch'

test('test ava configuration', t => {
    t.is(1230940800000, BITCOIN_EPOCH.valueOf())
})
