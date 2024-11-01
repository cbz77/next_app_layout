'use client'
import React from "react";
import DataTable from "./datatable";
import { useEffect, useState } from "react";

const AboutPage: React.FC = () => {

    const apiUrl = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

    const [fetchedRowData, setFetchedRowData] = useState<object>({});

    const fetchData = async () => {
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        setFetchedRowData(data);
    };

    return (
        <div>

            <h2>About - api test</h2>

            <button className="btn bg-blue-500 p-2 rounded hover:bg-blue-600 shadow" onClick={fetchData}>Fetch Data</button>

            <DataTable data={fetchedRowData}></DataTable>

        </div>
    );
};

export default AboutPage;