import React from "react";

function Taskcount({tasks}) {
    return (
        <div>
            <h1 className="text-4xl text-blue-400 mb-10 text-center">Task count</h1>
            <p className="text-2xl text-blue-400 text-center">{tasks.length}</p>
        </div>
    );
}
export default Taskcount
