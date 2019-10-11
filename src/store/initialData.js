export const week1 = [
  {
    name: "John Smith",
    schedules: [
      {
        isAvailable: true,
        shift: {
          // start, end, break, position
          1: [9, 15, 0.5, "kitchen"],
          2: [18, 23, 0.5, "server"],
        },
      },
      {
        isAvailable: false,
      },
      {
        isAvailable: true,
        shift: {
          1: [],
        },
      },
      {
        isAvailable: true,
        hasRestriction: true,
        restriction: {
          // e.g. available 18 - 21
        },
        shift: {
          1: [9, 15, 0.5, "kitchen"],
          2: [18, 23, 0.5, "server"],
        },
      },
      {
        isAvailable: false,
      },
      {
        isAvailable: false,
      },
      {
        isAvailable: true,
        shift: {
          1: [17, 22, 0.5, "server"],
        },
      },
    ],
  },
  {
    name: "Jane Doe",
    schedules: [
      {
        isAvailable: true,
        shift: {
          1: [],
        },
      },
      {
        isAvailable: true,
        hasRestriction: true,
        restriction: {
          // e.g. available 18 - 21
        },
        shift: {
          1: [9, 15, 0.5, "kitchen"],
          2: [18, 23, 0.5, "server"],
        },
      },
      {
        isAvailable: true,
        shift: {
          1: [9, 15, 0.5, "kitchen"],
          2: [18, 23, 0.5, "server"],
        },
      },
      {
        isAvailable: true,
        shift: {
          1: [16, 23, 0.5, "kitchen"],
        },
      },
      {
        isAvailable: false,
      },
      {
        isAvailable: false,
      },
      {
        isAvailable: false,
      },
    ]
  },
];

export const initialData = {
  employees: {
    randomID1: {
      name: "John Smith",
      schedules: {
        201910: {
          1: {
            isAvailable: true,
            shift: {
              // start, end, break, position
              1: [9, 15, 0.5, "kitchen"],
              2: [18, 23, 0.5, "server"],
            },
          },
          2: {
            isAvailable: false,
          },
          3: {
            isAvailable: true,
          },
          4: {
            isAvailable: true,
            hasRestriction: true,
            restriction: {
              // e.g. available 18 - 21
            },
            shift: {
              1: [9, 15, 0.5, "kitchen"],
              2: [18, 23, 0.5, "server"],
            },
          },
          5: {
            isAvailable: false,
          },
          6: {
            isAvailable: false,
          },
          7: {
            isAvailable: true,
            shift: {
              1: [17, 22, 0.5, "server"],
            },
          },
        },
      },
    },
    randomID2: {
      name: "Jane Doe",
      schedules: {
        201910: {
          1: {
            isAvailable: true,
          },
          2: {
            isAvailable: true,
            hasRestriction: true,
            restriction: {
              // e.g. available 18 - 21
            },
            shift: {
              1: [9, 15, 0.5, "kitchen"],
              2: [18, 23, 0.5, "server"],
            },
          },
          3: {
            isAvailable: true,
            shift: {
              1: [9, 15, 0.5, "kitchen"],
              2: [18, 23, 0.5, "server"],
            },
          },
          4: {
            isAvailable: true,
            shift: {
              1: [16, 23, 0.5, "kitchen"],
            },
          },
          5: {
            isAvailable: false,
          },
          6: {
            isAvailable: false,
          },
          7: {
            isAvailable: false,
          },
        },
      },
    },
  }
}


// "id": string,
// "company_name": string,
// "created_at": datetime,
// "updated_at": datetime,
// "creator": {
//     "id": string,
//     "email": string,
//     "displayName": string,
// },
// "start": {
//     "date": date,
//     "dateTime": datetime,
//     "timeZone": string
// },
// "end": {
//     "date": date,
//     "dateTime": datetime,
//     "timeZone": string
// },
// "transparency": string,
// "visibility": string,
// "privateCopy": boolean,
// "locked": boolean,