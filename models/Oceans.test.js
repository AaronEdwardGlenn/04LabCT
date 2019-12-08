const Oceans = require('./oceans');

describe('oceans', () => {

    describe('Hemesphere', () => {
        it('contains Hemesphere', () => {
            const oceans = new Oceans({
                Flora: 'Seaweed', 
                Fauna: 'Shark',
                Name: 'Atlantic'
            }); 

            const { errors } = oceans.validateSync(); 
            console.log(errors);
            expect(errors.oceans.message).toEqual('Path `Hemesphere` is required.');
        }); 

        it('Name should be a string', () => {
            const oceans = new Oceans({
                Hemesphere: 'Southern',
                Flora: 'Seaweed', 
                Fauna: 'Shark',
                Name: 12
            }); 
            const { errors } = oceans.validateSync(); 
            expect(errors.oceans.message).toEqual('Cast to String failed for value "12" at path "oceans"'); 
        });
    });
});
