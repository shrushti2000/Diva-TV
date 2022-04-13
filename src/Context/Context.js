import axios from 'axios'
import React from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import reducerFunction from '../Reducer/reducerFunction'

export const StateContext = createContext()

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunction, {
        categories: [],
        videos:[]
    })

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('/api/videos')
                dispatch({ type: 'SET_VIDEOS', payload: res.data.videos })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('/api/categories')
                dispatch({ type: 'SET_CATEGORIES', payload: res.data.categories })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <StateContext.Provider value={{ categories:state.categories,videos:state.videos }}>{children}</StateContext.Provider>
    )
}

const useData=()=>useContext(StateContext)

export {useData,Context};