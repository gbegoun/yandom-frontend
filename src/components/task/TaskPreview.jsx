import { TaskPreviewTitle } from "./TaskPreviewTitle"

export const TaskPreview = ({ task, columns, color }) => {
    return (
        <div className="task-preview">
            <TaskPreviewTitle task={task} color={color} />
            <div className="task-preview-item-wrapper">
                {columns.map(column => <div key={column._id} className="task-preview-item">{task.column_values[column._id]}</div>)}
            </div>
            <div className="task-preview-last-cell" />
        </div>
    )
}