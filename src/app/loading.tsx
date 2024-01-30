export default function Loading() {
    return (
        <div
            id="pre-loader"
            className="pre-loader flex-col justify-center items-center"
            style={{
                top: "-103vh",
                display: "none"
            }}
        >
            <div className="d11">
                <div className="d12">
                    <div id="load-txt">
                        <h1
                            className="text-7xl font-semibold"
                        >
                            LOADING
                        </h1>
                        <span
                            id="percentage"
                            className="text-base font-semibold"
                        >
                            100%
                        </span>
                    </div>
                    <div className="progress">
                        <div
                            className="progress-inner"
                            style={{
                                width: "100%"
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="pre-footer">
                <p
                    className="text-center text-sm font-medium"
                >
                    © 2023 – Theme powered by WordPressRiver
                </p>
            </div>
        </div>
    )
}