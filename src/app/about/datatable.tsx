import React from "react";
import { useState, useEffect } from "react";

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

interface DataTableProps {
    data: any;
}

const DataTable : React.FC<DataTableProps> = ({ data }) : React.ReactElement => {

    const [propData, setPropData] = useState<any[]>([]);

    useEffect(() => {
        if(data && data.data)
        setPropData(data.data);
    }, [data]);

    console.log("data table component data", propData);
  
     // Column Definitions: Defines the columns to be displayed.
     const colDefs = [
        { headerName: "Year", field: "Year" },
        { headerName: "Population", field: "Population" },
        { headerName: "Nation", field: "Nation" },
    ];

    return (
        <div className="mt-4">

            <div className="ag-theme-quartz-dark" style={{ height: 500 }}>
                <AgGridReact
                    rowData={propData}
                    columnDefs={colDefs}
                />
            </div>

        </div>
    );
};  

export default DataTable;