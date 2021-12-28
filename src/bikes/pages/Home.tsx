import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStations, loadingStationStatus } from '../../accions/bikeAccions';
import { columns } from '../components/tableConfig';

export const Home = () => {

    const dispatch = useDispatch();
    const { stations } = useSelector((state: any) => state.bikes);
    const { loading } = useSelector((state: any) => state.ui);
    const [stop, setStop] = useState(false);

    useEffect(() => {
        dispatch(loadingStations());
    }, [dispatch]);

    useEffect(() => {
        if (!stop) {
            const interval = setInterval(() => {
                dispatch(loadingStationStatus(stations));
            }, 5000);
            return () => clearInterval(interval);
        }
        return;

    }, [stop, dispatch, stations ]);

    const handleDetener = () => {
        setStop(!stop);
    }

    const handleReaload = () => {
        setStop(true);
        dispatch(loadingStationStatus(stations));
    }

    return (
        <div className='container mx-auto mt-5 relative'>

            {
                loading && <div className='img-loading'><img src="./img/loa.gif" className='w-44 h-44' alt="" /></div>
            }
            
            <h1 className='text-center text-2xl'>Toronto's Bike Share Info</h1>

            <hr className='border-gray-400 my-3' />

            <div className='flex mt-2 gap-1 justify-between mx-2'>
                <button onClick={handleDetener} className={`text-white p-2 rounded-lg w-full ${ (stop) ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600' } `} > {(stop) ? 'Run' : 'Stop'} </button>
                <button onClick={handleReaload} className='bg-gray-300 p-2 rounded-lg w-full'> Reload </button>
            </div>

            <DataTable
                columns={columns}
                data={stations}
                // title='Table bike'
                pagination={true}
                responsive
                fixedHeader
                fixedHeaderScrollHeight='600px'
            />

        </div>
    )
}
