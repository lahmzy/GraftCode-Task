// export const EnergyPriceService = {
//     GetPrice: async (): Promise<number> => {
//         const response = await fetch(`${GraftConfig.host}/MyEnergyService/EnergyPriceCalculator/GetPrice`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify([]),
//         });

//         if (!response.ok) {
//             throw new Error(`Error calling backend: ${response.statusText}`);
//         }

//         return response.json();
//     }
// };

// export const GraftConfig = {
//     host: "http://localhost:81"
// };
