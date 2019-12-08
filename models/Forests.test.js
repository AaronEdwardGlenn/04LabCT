const Forests = require('./Forests');

describe('Forest', () => {

    describe('Climate', () => {
        it('contains Climate', () => {
            const forest = new Forests({
                Flora: 'Pine Tree', 
                Fauna: 'Chipmunk',
                Name: 'Yellowstone'
            }); 

            const { errors } = forest.validateSync(); 
            
            expect(errors.Climate.message).toEqual('Path `Climate` is required.');
        }); 

        it('Name should be a string', () => {
            const forest = new Forests({
                Climate: 'Rain', 
                Flora: 'Pine Tree', 
                Fauna: 'Chipmunk',
                Name: []
            }); 
            const { errors } = forest.validateSync(); 
            expect(errors.Name.message).toEqual('Cast to String failed for value "[]" at path "Name"'); 
        });
    });
});
