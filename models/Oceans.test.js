const Oceans = require('./oceans');

describe('ocean', () => {

    describe('Hemesphere', () => {
        it('contains Hemesphere', () => {
            const ocean = new Oceans({
                Flora: 'Seaweed', 
                Fauna: 'Shark',
                Name: 'Atlantic'
            }); 

            const { errors } = ocean.validateSync(); 
            expect(errors.Hemesphere.message).toEqual('Path `Hemesphere` is required.');
        }); 

        it('Name should be a string', () => {
            const ocean = new Oceans({
                Hemesphere: 'Southern',
                Flora: 'Seaweed', 
                Fauna: 'Shark',
                Name: []
            }); 
            const { errors } = ocean.validateSync(); 
            expect(errors.Name.message).toEqual('Cast to String failed for value "[]" at path "Name"'); 
        });
    });
});
