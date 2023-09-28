import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'ui';

export const ClassShareTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Year</TableHead>
          <TableHead>Jan</TableHead>
          <TableHead>Feb</TableHead>
          <TableHead>Mar</TableHead>
          <TableHead>Apr</TableHead>
          <TableHead>May</TableHead>
          <TableHead>Jun</TableHead>
          <TableHead>Jul</TableHead>
          <TableHead>Aug</TableHead>
          <TableHead>Sep</TableHead>
          <TableHead>Oct</TableHead>
          <TableHead>Nov</TableHead>
          <TableHead>Dec</TableHead>
          <TableHead>YTD</TableHead>
          <TableHead className='w-[65px]'>Annua lized</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {['‘20', '‘21', '‘22', '‘23'].map((i, index) => (
          <TableRow key={index}>
            <TableCell className='font-bold'>{i}</TableCell>
            <TableCell>1.9%</TableCell>
            <TableCell>0.7%</TableCell>
            <TableCell>0.7%</TableCell>
            <TableCell>0.7%</TableCell>
            <TableCell>0.7%</TableCell>
            <TableCell>0.7%</TableCell>
            <TableCell>0.7%</TableCell>
            <TableCell>0.7%</TableCell>
            <TableCell>0.7%</TableCell>
            <TableCell>0.7%</TableCell>
            <TableCell>0.7%</TableCell>
            <TableCell>0.7%</TableCell>
            <TableCell className='font-bold'>5.8%</TableCell>
            <TableCell className='w-[65px] font-bold'>22.9%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
