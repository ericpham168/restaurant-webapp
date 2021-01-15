import React from 'react';
import * as actionTypes from '../action/actionTypes'
import action from '../action/cartActions'
import productData from '../../data/product.json'
import categoryData from '../../data/category.json'

const initialState = {
    products: productData,
    categories: categoryData,
    totalPrice: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.THEMSANPHAM: {
            return {
                ...state,
            }
        }
        case actionTypes.XOASANPHAM: {
            return {
                ...state,
            }
        }
        default: {
            return state
        }
    }
};

export default reducer;