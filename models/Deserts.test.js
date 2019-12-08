const Deserts = require('./Deserts');

describe('Desert', () => {

    describe('Temperature', () => {
        it('contains Temperature', () => {
            const desert = new Deserts({
                Flora: 'cactus', 
                Fauna: 'rattle snakes',
                Name: 'Death Valley'
            }); 

            const { errors } = desert.validateSync(); 
            expect(errors.Temperature.message).toEqual('Path `Temperature` is required.');
        }); 

        it('Temp should be a number', () => {
            const desert = new Deserts({
                Temperature: 'Fifty', 
                Flora: 'cactus', 
                Fauna: 'rattle snakes',
                Name: 'Death Valley'
            }); 
            const { errors } = desert.validateSync(); 
            expect(errors.Temperature.message).toEqual('Cast to Number failed for value "Fifty" at path "Temperature"'); 
        });
    });
});



