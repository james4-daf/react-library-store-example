import { isNullUndefinedOrEmpty } from '../StringUtils'

describe('String Utility Functions', () => {
    describe('Is null or empty checks', () => {
        it('should return false when string is specified', () => {
            const result = isNullUndefinedOrEmpty('Test text');

            expect(result).toBe(false);
        });

        it('should return true when string is empty', () => {
            const result = isNullUndefinedOrEmpty('');

            expect(result).toBe(true);
        });

        it('should return true when string is null', () => {
            const result = isNullUndefinedOrEmpty(null);

            expect(result).toBe(true);
        });

        it('should return true when string is undefined', () => {
            const result = isNullUndefinedOrEmpty();

            expect(result).toBe(true);
        })
    })
})