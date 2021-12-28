export const columns = [
    {
        name: 'Name',
        selector: (row: any) => row.name,
        sortable: true
    },
    {
        name: 'Addres',
        selector: (row: any) => row.address,
        sortable: true
    },
    {
        name: 'Capacity',
        selector: (row: any) => row.capacity,
        sortable: true
    },
    {
        name: 'Available bike',
        selector: (row: any) => row.stationStatus.num_bikes_available,
        sortable: true
    },
    {
        name: 'Status',
        selector: (row: any) => row.stationStatus.status,
        sortable: true
    },
]