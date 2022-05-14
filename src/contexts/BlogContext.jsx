import React from 'react'
import { createContext } from 'react'
import { useFetch } from '../utils/firebase';

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const { isLoading, blogList } = useFetch();
  
  return (
    <BlogContext.Provider value={{isLoading, blogList}}>{props.children}</BlogContext.Provider>
  )
}

export default BlogContextProvider;