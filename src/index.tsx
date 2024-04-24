import React from "react";
import { Input, Table } from "antd";
const Test = () => {
    const Column = [
        { title: 'Student Code', dataIndex: 'studentCode', key: 'studentCode' },
        { title: 'Student Name', dataIndex: 'studentName', key: 'studentName' },
        { title: 'Final Test', dataIndex: 'result', key: 'result' },
        { title: 'Home Town', dataIndex: 'hometown', key: 'hometown' }
    ]
    const data = [
        { studentCode: '0909001', studentName: 'Le Van Thang', result: 8, hometown: 'TPHCM' },
        { studentCode: '0909002', studentName: 'Ly Uyen Nhi', result: 8.6, hometown: 'TPHCM' },
        { studentCode: '0909003', studentName: 'Tran Minh Tam', result: 7.5, hometown: 'Dong Nai' },
        { studentCode: '0909004', studentName: 'Trinh Thi Thu Thao', result: 6, hometown: 'Tien Giang' },
        { studentCode: '0909005', studentName: 'Le Quang Thang', result: 8, hometown: 'Khanh Hoa' }
    ]
    const myProvince = ['TPHCM', 'Dong Nai'];
    ///const searchText = [];
    const setSearchText = [];
    return (
        <div className = "Cong nghe phan mem">
            <div className = "Searching">
            Find student by name: <Input type="text" 
            ///value = {searchText}
            />
            </div>
            <div className="">
            Show list :
            <Table columns={Column}
                dataSource = {data.filter(x => x.studentName)}   
            />
            </div>
            
        </div>

    )
}
export default Test;