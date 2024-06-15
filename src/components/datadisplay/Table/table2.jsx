import "./table2.css";

export const PureTable = ({ datacolumns, records }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {datacolumns?.map((el) => (
            <th className="table-titles" key={el.key}>{el?.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {records?.map((record) => (
          <tr key={record.key}>
            {datacolumns?.map((col) => (
              <td className="table-items" key={col.key}>
                {col?.render ? col.render(record) : record[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

