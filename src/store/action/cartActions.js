import React from 'react';
import * as actionTypes from './actionTypes';

export const addProduct = (productID) => {
    return {
        type: actionTypes.THEMSANPHAM,
        productID
    }
}

export const removeProduct = (productID) => {
    return {
        type: actionTypes.XOASANPHAM,
        productID
    }
}

export const deleteCart = () => {
    return {
        type: actionTypes.XOAGIOHANG
    }
}


export const orderProducts = () => {
    return {
        type: actionTypes.XOAGIOHANG
    }
}