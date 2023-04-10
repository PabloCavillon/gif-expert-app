import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';
import '@testing-library/jest-dom';

describe('Probando <GifExpertApp />', () => {

    test('Debe mostrarse correctamente', () => {

        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    })

    test('debe mostrar una lista de categorias', () => {
        const categories = ['puppies', 'kittens'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });

})