const Mountians = require('./Mountians');

describe('mountian', () => {

    describe('Elevation', () => {
        it('contains Elevation', () => {
            const mountian = new Mountians({
                Flora: 'Mountian Sage', 
                Fauna: 'Mountain Goat',
                Examples: 'South Sister'
            }); 

            const { errors } = mountian.validateSync(); 
            expect(errors.Elevation.message).toEqual('Path `Elevation` is required.');
        }); 

        it('Name should be a string', () => {
            const mountian = new Mountians({
                Elevation: 12214,
                Flora: 'Mountian Sage', 
                Fauna: 'Mountain Goat',
                Examples: []
            }); 
            const { errors } = mountian.validateSync(); 
            expect(errors.Examples.message).toEqual('Cast to String failed for value "[]" at path "Examples"'); 
        });
    });
});
