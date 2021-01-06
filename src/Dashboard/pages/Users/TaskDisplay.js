import React from 'react'

export default function TaskDisplay({usertasks}) {
    console.log(usertasks)
    return (
        <div className="main-card mb-3 card">
            <div className="card-body"><h5 className="card-title">Results</h5>
                <table className="mb-0 table table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Descripiton</th>
                        <th>Due Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {usertasks !== undefined ? usertasks.map((task, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{task.description}</td>
                            <td>{task.dueDate.slice(0, 10)}</td>
                            <td>{task.status}</td>
                        </tr>
                        ))
                        : null}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
