import React from "react";
import ChildComponent from './ChildComponent'

function parentComponent(){
    const data = 'Hello, I am ParentComponent';

    return <ChildComponent message={data}/>
}