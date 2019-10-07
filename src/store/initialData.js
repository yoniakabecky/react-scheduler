export const initialData = {
    week1: {
        day1: {
            employee1: {
                isAvailable: true,
                start_time: 9,
                end_time: 15,
            },
            employee2: {
                isAvailable: true,
                start_time: 12,
                end_time: 20,
            },
            employee3: {
                isAvailable: true,
                start_time: 17,
                end_time: 24,
            },
            employee4: {
                isAvailable: false,
                start_time: null,
                end_time: null,
            }
        },
        day2: {
            employee1: {
                isAvailable: false,
                start_time: 9,
                end_time: 15,
            },
            employee2: {
                isAvailable: true,
                start_time: 12,
                end_time: 20,
            },
            employee3: {
                isAvailable: true,
                start_time: 17,
                end_time: 24,
            },
            employee4: {
                isAvailable: false,
                start_time: null,
                end_time: null,
            }
        }
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