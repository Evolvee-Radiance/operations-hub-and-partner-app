import assert from 'node:assert/strict';
import { formatCalendarDate } from '../../frontend/src/dateFormatting.js';

let actualResult = formatCalendarDate('2026-11-18')
let expectedResult = '18/11/2026'

assert.equal(actualResult, expectedResult);

actualResult = formatCalendarDate(null)
expectedResult = '—'

assert.equal(actualResult, expectedResult);

actualResult = formatCalendarDate('2026-01-01')
expectedResult = '01/01/2026'

assert.equal(actualResult, expectedResult);