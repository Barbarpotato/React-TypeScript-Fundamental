import React from 'react';
import { PersonList } from '../basicProps/ArrayOfObject';

//? extracting other component props to this component.
const CustomComp = ({ names }: React.ComponentProps<typeof PersonList>) => {

    return (
        <>{names}</>
    )
}