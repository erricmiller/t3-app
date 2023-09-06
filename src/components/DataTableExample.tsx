// 'use client'
// import React, { useEffect, useState } from 'react'

// const DataTableExample = () => {
//     const [tableData, setTableData] = useState<dataTableType[]>([]);
//   const [isFetching, setIsFetching] = useState<boolean>(false);

//   useEffect(() => {
//     const data = async () => {
//       setIsFetching(true);
//       const result = await getData();

//       if (result) {
//         setTableData(result);
//         setIsFetching(false);
//       } else {
//         setIsFetching(false);
//       }
//     };
//     data();
//   }, []);

//   const filters = [
//     {
//       id: "1",
//       columnKey: "gender",
//       columnTitle: "Genders",
//       options: [
//         {
//           id: "1",
//           value: "Male",
//           label: "Male",
//         },
//         {
//           id: "2",
//           value: "Female",
//           label: "Female",
//         },
//       ],
//     },
//     {
//       id: "2",
//       columnKey: "card_type",
//       columnTitle: "Card Types",
//       options: [
//         {
//           id: "1",
//           value: "jcb",
//           label: "JCB",
//         },
//         {
//           id: "2",
//           value: "americanexpress",
//           label: "American Express",
//         },
//         {
//           id: "3",
//           value: "visa",
//           label: "Visa",
//         },
//         {
//           id: "4",
//           value: "diners-club-enroute",
//           label: "Diners Club Enroute",
//         },
//         {
//           id: "4",
//           value: "china-unionpay",
//           label: "China Unionpay",
//         },
//         {
//           id: "5",
//           value: "visa-electron",
//           label: "Visa Electron",
//         },
//         {
//           id: "6",
//           value: "maestro",
//           label: "Maestro",
//         },
//         {
//           id: "7",
//           value: "mastercard",
//           label: "Mastercard",
//         },
//         {
//           id: "8",
//           value: "bankcard",
//           label: "Bankcard",
//         },
//       ],
//     },
//   ];
//   return (
//     <div>DataTableExample</div>
//   )
// }

// export default DataTableExample