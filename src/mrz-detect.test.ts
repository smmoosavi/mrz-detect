import { describe, expect, it } from 'vitest';
import { mrzDetect } from './mrz-detect';

describe('mrzDetect', () => {
  it('return mrz-detect', () => {
    expect(mrzDetect()).toBe('mrz-detect');
  });
});
