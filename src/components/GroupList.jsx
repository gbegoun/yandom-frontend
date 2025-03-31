import { GroupPreview } from "./GroupPreview";
export const GroupList = ({ columns, groups }) => {

    return (
        <div>
            {groups.map(group => <GroupPreview key={group._id} columns={columns} group={group} />)}
        </div>
    )
}