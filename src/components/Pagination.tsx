import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function BasicPagination({count}:{count:number}) {
    return (
        <Stack spacing={5}>
          <Pagination count={count} />
        </Stack>
      );
}

export default BasicPagination