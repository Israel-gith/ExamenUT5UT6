import ismayoredad from '../utils/ismayoredad'

describe('ismayoredad', () => {

        it('comprobar que la función devuelve booelano,', () =>
        {  
            const result = ismayoredad(8);
            expect(typeof result).toBe('boolean')
        })

        it('comprobar que si la entrada a la función es 18 devuelve true ', () =>
        {   
            const result = ismayoredad(18);
            expect(result).toBe(true)
        })

        it('comprobar que si la entrada a la función es un número mayor a 18 devuelve true', () =>
            {   
                const result = ismayoredad(22);
                expect(result).toBe(true)
            })

        it('comprobar que si la entrada a la función es un número menor a 18 devuelve false', () =>
            {   
                const result = ismayoredad(14);
                expect(result).toBe(false)
            })

         it('comprobar que si la entrada a la función es un número negativo devuelve null', () =>
             {   
                const result = ismayoredad(-2);
                expect(result).toBe(null)
            })
    
       
    });