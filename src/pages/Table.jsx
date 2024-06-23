import React from "react";
import DocumentationForm from "../components/docs/documentation";
import PureTable from "../components/datadisplay/Table/table2";
import CancelIcon from "../components/datadisplay/Table/assets/cancelicon";
const Table = () => {
  const dataSource = [
    {
      name: "Ahmed",
      age: "22",
      address: "Baghdad",
    },
    {
      name: "Ali",
      age: "24",
      address: "Erbil",
    },
    {
      name: "Mariam",
      age: "30",
      address: "Najaf",
    },
  ];
  const datacolumns = [
    {
      title: "Name",
      key: "name",
      render: (record) => <a className="names">{record.name}</a>,
    },
    {
      title: "Age",
      key: "age",
      render: (record) => <span>{record.age}</span>,
    },
    {
      title: "Address",
      key: "address",
      render: (record) => <span>{record.address}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <span>
          <span className="tag-container tag1">
            green
            <CancelIcon className="cancel-icon" />
          </span>
          <span className="tag-container tag2">
            geekblue
            <CancelIcon className="cancel-icon" />
          </span>
          <a className="invite" href="#">
            Invite
          </a>
          <a className="delete" href="#">
            Delete
          </a>
        </span>
      ),
    },
  ];
  const tableCode = `
  const dataSource = [
      {
        name:'Ahmed',
        age:'22',
        address:'Baghdad'
      },
      {
        name:'Ali',
        age:'24',
        address:'Erbil'
      },
      {
        name:'Mariam',
        age:'30',
        address:'Najaf'
      }
    ];
  
    const datacolumns = [
      {
        title: 'Name',
        key: 'name',
        render: (record) => <a className="names">{record.name}</a>,
      },
      {
        title: 'Age',
        key: 'age',
        render: (record) => <span>{record.age}</span>,
      },
      {
        title: 'Address',
        key: 'address',
        render: (record) => <span>{record.address}</span>,
      },
      {
        title: 'Action',
        key: 'action',
        render: (record) => (
          <span>
            <span className="tag-container tag1">
              green 
              <CancelIcon className="cancel-icon" />
            </span>
            <span className="tag-container tag2">
              geekblue 
              <CancelIcon className="cancel-icon" />
            </span>
            <a className="invite" href="#">Invite</a>
            <a className="delete" href="#">Delete</a>
          </span>
        ),
      },
    ];
  
  return (
      <PureTable datacolumns={datacolumns} records={dataSource} />
  
  );
  `;
  return (
    <div>
      <DocumentationForm
        componentName="Table"
        description="A table component that displays data in a tabular format."
        propsInfo={[
          {
            name: "initialRows",
            type: "array",
            description: "Array of rows to be displayed in the table.",
          },
          {
            name: "name",
            type: "string",
            description: "Name of the user.",
          },
          {
            name: "columnTitles",
            type: "array",
            description: "Array of column titles to be displayed in the table.",
          },
        ]}
        stateInfo={[]}
        codeSnippet={tableCode}
      >
        <PureTable datacolumns={datacolumns} records={dataSource} />
      </DocumentationForm>
    </div>
  );
};

export default Table;
