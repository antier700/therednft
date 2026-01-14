import './CustomTable.scss'

export interface CustomTableColumn<T> {
  header: string
  accessor: keyof T
  render?: (row: T) => React.ReactNode
  className?: string
}

interface CustomTableProps<T> {
  columns: Array<CustomTableColumn<T>>
  data: T[]
  className?: string
}

const CustomTable = <T extends Record<string, unknown>>({ columns, data, className = '' }: CustomTableProps<T>) => {
  return (
    <div className={`custom-table-wrapper ${className}`}>
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.accessor)} className={col.className}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={String(col.accessor)} className={col.className}>
                  {col.render ? col.render(row) : String(row[col.accessor] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomTable

