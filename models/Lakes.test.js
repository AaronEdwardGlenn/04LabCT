const Lake = require('./Lakes');

describe('Lake', () => {

    describe('Location', () => {
        it('contains Location', () => {
            const lake = new Lake({
                Flora: 'Green Algea', 
                Fauna: 'Trout',
                Name: 'Elk Lake'
            }); 

            const { errors } = lake.validateSync(); 
            console.log(errors);
            expect(errors.lake.message).toEqual('Path `Location` is required.');
        }); 

        it('Name should be a string', () => {
            const lake = new Lake({
                Location: 'Bend, Oregon',
                Flora: 'Green Algea', 
                Fauna: 'Trout',
                Name: {}
            }); 
            const { errors } = lake.validateSync(); 
            expect(errors.lake.message).toEqual('Cast to String failed for value "{}" at path "lake"'); 
        });
    });
});
