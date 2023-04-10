const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGifs } = require("../../hooks/useFetchGifs");


describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', async() => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Puppies') );
        const {data, loading} = result.current;
        
        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe de retornar un arreglo de imgs y el loading en false', async () => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Puppies') );
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });

})