
export const GroupHeaderTitleRow = ({ title, color, setIsCollapsed }) => {

    return (
        <div className="group-header-title-row" style={{ '--color-indicator': color }}>
            <div className="group-header-title-menu" />
            <div className="collapse-group-icon-wrapper" onClick={() => setIsCollapsed(true)}>
                <svg className="collapse-group-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10.5303 12.5303L10 13.0607L9.46967 12.5303L5.46967 8.53033C5.17678 8.23744 5.17678 7.76256 5.46967 7.46967C5.76256 7.17678 6.23744 7.17678 6.53033 7.46967L10 10.9393L13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967C14.8232 7.76256 14.8232 8.23744 14.5303 8.53033L10.5303 12.5303Z" />
                </svg>
            </div>
            <div className="group-header-title-text">{title}</div>
            <div className="group-header-summary-text">5 items</div>
        </div>
    )
}