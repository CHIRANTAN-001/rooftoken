// import { appDataAtom, appEventsAtom } from '@/state/AppState';
// import { getUser } from '@/utils/apiUtils';

// import { useAtom, useAtomValue } from 'jotai';
// import { useEffect } from 'react';

// export function useAppData() {
//   const [appData, setAppData] = useAtom(appDataAtom);

//   const appEvents = useAtomValue(appEventsAtom);

//   useEffect(() => {
//     fetchData();
//   }, [appEvents.UpdateDataEvent]);

//   async function fetchData() {
//     const user = await getUser();

//     setAppData((prev) => ({
//       ...prev,
//       user,
//     }));
//   }

//   return {
//     appData,
//     setAppData,
//     fetchData,
//   };
// }
