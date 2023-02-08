import React from 'react'
import { Group } from '../../types/Group.ts'
import GroupItem from '../GroupItem/GroupItem.tsx'


interface Props{
  groups: Group[],
  setGroups: (groups:Group[] )=> void
}
export default function GroupList({groups, setGroups}: Props) {
  return (
    <>
      <div className="row">
        {groups.map((group) => (
          <GroupItem
            key={group.id}
            group={group}
            groups={groups}
            setGroups={setGroups}
          />
        ))}
      </div>
    </>
  )
}
