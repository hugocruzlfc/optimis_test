import React, { createContext, useState, useEffect } from "react";
import { Group } from '../types/Group.ts'
import { GroupContextType } from '../types/GroupContext.ts'
import { getGroupsFromApi } from '../services/group.ts'


const INITIAL_GROUP = [{
    id: 1,
    name: '',
    stainId: [],
    active: true,
    labCountry: ''
}]


export const GroupContext = createContext<GroupContextType | null>(null);
interface Props {
    children: React.ReactNode
}



export const GroupContextProvider = ({ children }: Props) => {
    const [groups, setGroups] = useState<Group[]>(INITIAL_GROUP);
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
    setLoading(true)
        getGroupsFromApi().then(data => {
            setGroups(data)
            setLoading(false)
        })

    }, []);


    return (
        <GroupContext.Provider
            value={{ groups, setGroups,loading }}
        >
            {children}
        </GroupContext.Provider>
    );
};

