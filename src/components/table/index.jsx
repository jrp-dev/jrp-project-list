import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Button,
} from '@mui/material';

export default function TableComponent({ headers, data, onEdit }) {
  if (!headers || !data) {
    return null;
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headers?.map((header, index) => (
              <TableCell key={index} className={index === headers?.length - 1 ? 'text-right' : ''}>
                {header?.label}
              </TableCell>
            ))}
            <TableCell className="text-right">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {headers?.map((header, headerIndex) => (
                <TableCell key={headerIndex}>{row?.[header?.accessor]?.toString()}</TableCell>
              ))}
              <TableCell className="text-right">
                <Button variant="contained" color="primary" onClick={() => onEdit(row?.id)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
