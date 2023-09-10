import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { auditActions } from '_store';
import TableLayout from '../_components/TableLayout'

export { Auditor };

function Auditor() {
    const users = useSelector(x => x.audit.list);
    const dispatch = useDispatch();

    useEffect(() => {
      console.log(1)
      dispatch(auditActions.registers());
    }, []);

   const headers=['firstName','lastName','lastLogin','clientIp']
   return (
  
        <div>
       <h1>Admin Users</h1> 
       {users?.value ? (
        <TableLayout data={users.value} headers={headers} />
      ) : (
        <div>Loading...</div>
      )}
        </div>
    
    
);

}
