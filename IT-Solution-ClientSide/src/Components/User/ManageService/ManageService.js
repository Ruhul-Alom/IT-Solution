import React from 'react'

const ManageService = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-3">
                <SideBar />
            </div>
            <div className="col-md-8">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allService.map(reg => <AllServiceInfoTable reg={reg}></AllServiceInfoTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default ManageService
