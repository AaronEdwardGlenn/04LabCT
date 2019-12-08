const Forest = require('./Forests');

describe('Forest', () => {

    describe('Climate', () => {
        it('contains Climate', () => {
            const forest = new Forest({
                Flora: 'Pine Tree', 
                Fauna: 'Chipmunk',
                Name: 'Yellowstone'
            }); 

            const { errors } = forest.validateSync(); 
            console.log(errors);
            expect(errors.forest.message).toEqual('Path `Climate` is required.');
        }); 

        it('Name should be a string', () => {
            const forest = new Forest({
                Climate: 'Rain', 
                Flora: 'Pine Tree', 
                Fauna: 'Chipmunk',
                Name: 66
            }); 
            const { errors } = forest.validateSync(); 
            expect(errors.forest.message).toEqual('Cast to String failed for value "55" at path "forest"'); 
        });
    });
});
