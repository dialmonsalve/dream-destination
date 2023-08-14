import { ReactNode } from "react"

interface TableProps {
  children: ReactNode | ReactNode[],
}


export const Table = ({ children }: TableProps) => {

  return (
    <div className="table"  >
      {children}
    </div>
  )

}


interface TableContentProps {
  children: ReactNode | ReactNode[],
  columns: string,
  type: 'header' | 'row'
}

export const TableContent = ({ children, columns, type }: TableContentProps) => {

  const style = {
    gridTemplateColumns: columns
  }

  return (
    <div className={`table__${type}`} style={style} >
      {children}
    </div>
  )
}


interface TdProps {
  children?: string | string[] | ReactNode
}
export const Td = ({ children }: TdProps) => {

  return (
    <div className="table__td" >
      {children}
    </div>
  )
}

